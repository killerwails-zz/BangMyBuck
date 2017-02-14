require 'redis'
require 'httparty'
require 'rack/cors'
require 'redis'
require 'digest'

BASE_URI = "https://admin.duberex.com/products/geo_search.json"

redis = Redis.new 

use Rack::Cors do
  allow do
    origins "*"
    resource "*"
  end
end

run(proc do |env|
  query_string = env["QUERY_STRING"]
  key = redis_key(query_string)

  json = redis.get(key)

  body = if json.nil?
    response = HTTParty.get("#{BASE_URI}?#{query_string}")
    redis.setex(key, 1200, response.body)
    response.body
  else
    json
  end

  ['200', {'Content-Type' => 'application/json'}, [body]]
end)

def redis_key(str)
  Digest::MD5.new.update(str).hexdigest
end
