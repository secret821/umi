// # 接口

import { defineConfig } from "umi";

export default defineConfig({
    define : {
        'process.env':{
            NODE_ENV: 'test',
            UMI_ENV: 'test',
            "REACT_APP_BASEURL" : 'http://api.sciclubs.net',
            "REACT_APP_BASEURL2" : 'http://sciclubs.net',
            "REACT_APP_BASEURL3" : 'http://tools.sciclubs.net',
            // # 埋点参数
            "REACT_APP_SENSORS" : 'http://cdn0.sciclubs.net/c/',
            
        }
    }
}) 
