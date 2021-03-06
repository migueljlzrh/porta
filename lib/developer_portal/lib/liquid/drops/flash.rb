module Liquid
  module Drops
    class Flash < Drops::Base

      allowed_name :flash

      desc """
        Contains possible notifications, errors or warnings that were
        generated by the last request (similar to Rails 'flash' object).
      """
      example %{
        {% for message in flash.messages %}
          <p id="flash-{{ message.type }}">
            {{ message.text }}
          </p>
       {% endfor %}
      }
      def initialize(flash_collection = [])
        @flash_collection = flash_collection
      end

      desc "Returns an array of messages."
      def messages
        @flash_collection.map do |type, text|
          Message.new(type, text)
        end
      end

      class Message < Drops::Base
        def initialize(type, text)
          @type = type.to_s
          @text = text.to_s
        end

        desc """
          Possible types of the messages are:

           - success (not used by now)
           - info
           - warning
           - danger
        """
        def type
          case @type
          when 'notice' then 'info'
          when 'alert' then 'danger'
          when 'error' then 'danger'
          else @type
          end
        end

        def text
          @text
        end
      end
    end
  end
end
