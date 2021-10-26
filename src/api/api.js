import ajax from './ajax.js'

export const ReqLogin = (username,password) => ajax ('/login',{username, password},'POST')