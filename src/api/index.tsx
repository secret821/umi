import { http } from "./service"

export const getCode = async function (params : any) {
    const res = await http.get('/biye/get_qrcode',params)
    return Promise.resolve(res)
}

export const getMock = async function (params : any) {
    const res = await http.get('/biye/get_mock',params)
    return Promise.resolve(res)
}