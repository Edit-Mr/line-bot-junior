function doPost(e) {
    try {
      var reply_token = JSON.parse(e.postData.contents).events[0].replyToken;
      var user_message = JSON.parse(e.postData.contents).events[0].message.text;
      var user_id = JSON.parse(e.postData.contents).events[0].source.userId;
      if (user_message == '早安') {
        reply(reply_token, {
          "type": "text",
          "text": "好喔"
        });
      } else if (user_message == '設定') {
        reply(reply_token, {
          "type": "text",
          "text": "好喔"
        });
      } else {
        reply(reply_token, {
          "type": "text",
          "text": "蛤?"
        });
      }
    } catch (ex) {
      history.getRange(LastRow + 1, 5).setValue(ex);
    }
  }
  
  function reply(reply_token, message) {
    try {
      var url = "https://api.line.me/v2/bot/message/reply";
      var headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer rRkX60ZCBZmOihNpTWri5mQjvglcLGxHxsAOpyx+scOL9ecHXtH9oHXL5p0LryShV9mNNTCGu8dxGlYD4A0/+/GmJ/K5PNdXZTgbqVF2CBqno+entuLXP4qGWB2UJM0iU2B2UudSey2t7J/vogzMzwdB04t89/1O/w1cDnyilFU="
      };
      var data = {
        "replyToken": reply_token,
        "messages": [
          message
        ]
      };
      var options = {
        "method": "post",
        "headers": headers,
        "payload": JSON.stringify(data)
      };
      UrlFetchApp.fetch(url, options);
    } catch (ex) {
      history.getRange(LastRow + 1, 5).setValue(ex);
    }
  }