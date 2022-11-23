### 啟動兩個環境

一個 live server 測試 get api 的環境 http://localhost:5500

一個 node.js環境 http://localhost:3000

node.js啟動方式，在終端機輸入指令按enter
```
npm run dev
```

### app.js 設定

允許請求的路徑:此為測試get api 的環境
```
const corsOptions = {
  origin: ["http://localhost:5500"],
};
```

axios 路徑填入本地api路徑
```
axios
  .get("http://localhost:3000/travelData")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
