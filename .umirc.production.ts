// # 接口

import { defineConfig } from "umi";

export default defineConfig({
    define : {
        'process.env':{
            NODE_ENV: 'production',
            UMI_ENV: 'production',
            "REACT_APP_BASEURL" : 'https://api.shiyanjia.com',
            "REACT_APP_BASEURL2" : 'https://www.shiyanjia.com',
            "REACT_APP_BASEURL3" : 'https://tools.shiyanjia.com',
            // # 埋点参数
            "REACT_APP_SENSORS" : 'https://cdn0.shiyanjia.com/c/',
            
        }
    }
}) 
