import json
import sys
import tornado.websocket
import tornado.web

class WebsocketHandler(tornado.websocket.WebSocketHandler):
    
    # Avoid a 403 error by accepting all cross-origin traffic for the purpose of this demo  
    def check_origin(self, origin):
        return True

    def open(self):
        print("WebSocket opened")
        self.write_message("ok")

    def on_message(self, message):
        try:
            print(self.request.headers)
            message = json.loads(message)
            if 'event' not in message:
                print('Missing event parameter')
                self.close()
                return
    
            print("event =", message['event'], ", data =", str(message['data']))
            self.write_message(u"" + json.dumps(message))
            self.write_message("message received")
        except ValueError:
           print("JSON expected.")
        except:
            print("Unexpected error:", sys.exc_info()[0])
 
    def on_close(self):
        print("WebSocket closed")

if __name__ == "__main__":
    application = tornado.web.Application([
        (r'/demo', WebsocketHandler)
    ])

    application.listen(8888)

    try:
        tornado.ioloop.IOLoop.instance().start()
    except KeyboardInterrupt:
        tornado.ioloop.IOLoop.instance().stop()