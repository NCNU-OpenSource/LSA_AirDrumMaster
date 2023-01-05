# 空氣鼓達人
lsa期末報告
# 概念
延勳有強烈的「打鼓上癮症」他只要每隔一段時間不打鼓她就會渾身難受、雙手發抖、講話口吃、暗視、喪失平衡感、情緒失控等戒斷症狀，所以以他請他的組員們開發了這個空氣鼓讓他可以無時無刻都在打鼓，這樣他就可以在上課通勤還有休息時間都一直打鼓，避免發生戒斷症狀時發生憾事。
# 功能
- 一個電子鼓，透過影像識別手揮動的位置來發出聲音
- 有三種樂器可以選擇分別是鼓、鋼琴、吉他
- 使用者可以上傳喜歡的背景樂，來自己根據音樂打節拍
# 使用設備
- raspberry pi 3
- web camera
# 如何快速佈署空氣鼓達人
- 以下皆在樹梅派下
- sudo apt install apache2
- sudo apt install php -y
- sudo apt install git
- cd /etc/www/html 
- sudo git clone https://github.com/SredWh/LSA_project.git
- ifconfig 獲取樹梅派IP
- 電腦要跟樹梅派在同一個內網下
- 電腦根據樹梅派的IP連上apache2就可以開始打鼓
# 程式構想
最初原本打算用opencv+mediapipe來開發我們的專案，但我發現開發出的效果跟我用網頁差不多，所以我們決定為了讓使用者隨時都能都能打鼓，所以改用網頁的方式來進行開發。
# DEMO影片

# 工作分工
- 陳煒函:程式碼、架伺服器、題目發想
- 陳延勳:報告、示範、題目發想
- 李柏緯:寫介紹、攝影剪輯、創意發想
# 遇到問題
- 架在樹梅派的網頁沒辦法偵測到鏡頭(getUserMedia’ of undefined )解決方法:https://blog.clarence.tw/2020/10/29/solve-the-undefined-problem-of-getusermedia/
# 參考資料
- https://github.com/victordibia/handtrack.js/
- https://www.gushiciku.cn/pl/apV0/zh-tw
- https://blog.clarence.tw/2020/10/29/solve-the-undefined-problem-of-getusermedia/
