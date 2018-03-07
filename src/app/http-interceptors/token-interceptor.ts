import {Injectable} from '@angular/core'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVmM2NkOTNlOGMzNTI2NjU5MTc0Y2M5NjQ5NTIxMTY3YjUwNGVkNTFhNGNlNjBmYWIyNzIwZTI1NDRhNTRlZGYyOTMzZWQyNGEzYTU5MjY3In0.eyJhdWQiOiIyIiwianRpIjoiNWYzY2Q5M2U4YzM1MjY2NTkxNzRjYzk2NDk1MjExNjdiNTA0ZWQ1MWE0Y2U2MGZhYjI3MjBlMjU0NGE1NGVkZjI5MzNlZDI0YTNhNTkyNjciLCJpYXQiOjE1MjAzOTgwNDgsIm5iZiI6MTUyMDM5ODA0OCwiZXhwIjoxNTUxOTM0MDQ4LCJzdWIiOiIxIiwic2NvcGVzIjpbIm1hbmFnZS11c2VyIl19.PdXKnE-0FBtU7TKrnbMwAAeuQ9imXIbiyZK4L0Gu-aHhhkPp-7r-iOx7uX0po9Qv8OaWISZp01u8rrEuU-7Ns3_D7DeUOHMW0uVXuWTxLT-RjVQZixKYa1fZ3i5DJctZ27MumWgYoIEuG80TecWp5KH-byg_jniYriWkPew67srCtQWoeTYHwhrA2SdOlUO3kYRRa5ykZtjOjod-D90xxbaRcdC720Lyl4d3St2tZjQNgHO_Pdra46L9AYVkY03N5eC0CSwGgyQmegWl-onpfm2R043vx2abcxYhBaciATt_hBCKVFTDqbSmIoDbOXDsalCTvQg7NngK1c-hqW9FXa2kndwiOhXsAc8KOZgqkw1n6i-Sq0buNyAtWthQ9LVPBIfH05oaGdlL3BjVopCZqTcT-DutrpKKQ0BTG9Ps2puCcHDdpxAmikSCfuppZm676E9rh_s-iIQVxKf0QC6oxwzYcWBo-dWIWlbU1dMHfC3JXnarg-grU_xKvLhVoOqnhk_SuTlK5IdTZk7u05Bk5Lhmvth2mdU-qnwuCswGJ07tcfNkhNWiwJlFxXOolMWYgkTJqKmDN1cAjF8ZnS9iUrAq95u-mx1S2l4cTV57hFNwVLBwNgSR3CN-0B2j81GPsdn5TDDwEVUjo2j9gJklLwuSu9UZD4ge99ZqNOEAWWo'

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }


        const request = req.clone(httpOptions)

        return next.handle(request)

    }
}