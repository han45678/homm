const caseName = "homm"
export default {
    caseid: "4fe056be-1c94-4602-b659-f663f478e202",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市安平區新港路二段585號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.096232942265!2d120.1635414!3d22.9834885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e75feb74702ed%3A0x296f70dc2ee14d30!2zNzA46Ie65Y2X5biC5a6J5bmz5Y2A5paw5riv6Lev5LqM5q61NTg16Jmf!5e0!3m2!1szh-TW!2stw!4v1763537267021!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/chVTrEvxsaGtbkv17",
    phone: "06-2980277",
    fbLink: "https://www.facebook.com/61581195067952#/",
    fbMessage: "https://m.me/61581195067952#/",
    // line: "https://lin.ee/FTYKISC",
    caseName: caseName,
    houseInfos: [
      /*   */  ["建設開發", "亞果遊艇集團"],
        ["飯店管理", "悅榕集團"],
        ["建築設計", "許清俊建築師事務所"],
        ["景觀規劃", "鼎昕景觀設計"],
        ["燈光設計", "偶得設計"],
        ["營造公司", "銓興營造"],
    ],
    gtmCode: ["GTM-KBSZPWCS"], // 可放置多個
    // recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務"
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
          room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: [ "一房","兩房", "三房"],
        bypass:true,　
      }, 
      budget: {
        title: "預算",
        hold: "請選擇區間",
        option: ["1000萬以下", "1000萬～1500萬", "1500萬～2000萬", "2000萬以上"],
        bypass:true, //必填開啟使用1000萬-1500萬、1501萬-2000萬、2001萬以上
      },

        /*
      use_type: {
        title: "使用用途",
        hold: "請選擇用途",
        option: ["自住", "投資", "租賃"]
      },
    */
},

    navList: [
        /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    */
    ],
}