import {Injectable} from '@angular/core'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJhODQ5ZTM1ZDIwZDM2NjAwODJmZDNmYWZhNzYwNGM5MmQ4ZTM3NGYwMjJjNmU1YzMxMjczZGE3OGYxNjM0ZDM5MjBmMzA0ZmJmYzExYzUzIn0.eyJhdWQiOiIyIiwianRpIjoiYmE4NDllMzVkMjBkMzY2MDA4MmZkM2ZhZmE3NjA0YzkyZDhlMzc0ZjAyMmM2ZTVjMzEyNzNkYTc4ZjE2MzRkMzkyMGYzMDRmYmZjMTFjNTMiLCJpYXQiOjE1MjA0Nzk4ODAsIm5iZiI6MTUyMDQ3OTg4MCwiZXhwIjoxNTUyMDE1ODgwLCJzdWIiOiIxIiwic2NvcGVzIjpbIm1hbmFnZS11c2VyIl19.bEp2YSJUZ1bfMQQ7hEGHtz150axHsLZprYBkWd6yU5d5C9W3-XZrKLDeqz61rH5azw3qMujl6u_SYBh6zFhe8HkDh3e8WdguhlzzM9chZdeck7ny3ctYyOrzsnK3KcDFz5nCcYZqEK1klyy75sQ0mcoGp80p4vUkSp-edhQak_9RRm5Mg78Cxso1Z12zJPbKv8c5vtlBe1UWQDhXdoTlR-BngedgQ7IPTtJsbYc_zXQg4On3JBtTY9vxeE6oDj-fMgznurFgCfiG5MhpdBBrPYUOiUJ3MF7sYVR_aBakF1PaNynHrOpYRTgcrg9w48r9bzPO4IIm7OCdyI6kNZqJONG9nPRD3bcRxG50_6r0w5yKuXzmnCU7X7URbWhgONw-6z1MoNBDqfRzxOAvCIsSq-wzotk7TRFeDQelL63mgWiAbvAyDK3SriwkI8rj8FQMtXTXKTZQpr4R9gD18sgf9eT28LGnkdSlR5dKBXnDFp44GHXE4JnkRBeeHEgYMKfLAeJiXb-bjOtdG7W9n3SeUSiRbzI0S75xeHf9rlKNQWABWAyHYgEktAMy2rug8MMxZhQnOcadvBQxgj5grg51dSaxJ-Zr9RwTJaWkE5nrIXXRwFNJzvfUoxpaqSw8_velwiPdzSc9tGorpva5hkuMb73AraT70haxoGmPQn9ltgI'
       // const newToken = ''
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }

       // httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${newToken}`)

        const request = req.clone(httpOptions)

        return next.handle(request)

    }
}