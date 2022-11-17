// # 接口

import { defineConfig } from "umi";

export default defineConfig({
    define : {
        'process.env':{
            "REACT_APP_BASEURL" : '/api',
            "REACT_APP_BASEURL2" : '/crm',
            "REACT_APP_BASEURL3" : '/tool',
            // # 埋点参数
            "REACT_APP_SENSORS" : 'http://cdn0.sciclubs.com/c/',
            
        }
    }
}) 
