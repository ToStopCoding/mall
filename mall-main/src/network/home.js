import { request } from "./network";

export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}