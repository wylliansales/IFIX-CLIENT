import {Injectable} from '@angular/core'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdjZTM5MTAwYTFmYTAxZTI1ZjBlMzJmYmJkZTUyZmQ1ZWM5OWZkNmE2YTZjMTRkZDRmODYzZmY2ZmVhYjczOTE3MTA1YTY5YjIzNTM4ZDdjIn0.eyJhdWQiOiIzIiwianRpIjoiN2NlMzkxMDBhMWZhMDFlMjVmMGUzMmZiYmRlNTJmZDVlYzk5ZmQ2YTZhNmMxNGRkNGY4NjNmZjZmZWFiNzM5MTcxMDVhNjliMjM1MzhkN2MiLCJpYXQiOjE1MjEwMDQ5OTAsIm5iZiI6MTUyMTAwNDk5MCwiZXhwIjoxNTUyNTQwOTkwLCJzdWIiOiIxMDEiLCJzY29wZXMiOlsibWFuYWdlLXVzZXIiXX0.XSwjr6BxjNfgIC5LhYQ2X_p29GJF7J1HNQ7wYkxxl4AuhMIyWQRR9tkeGBwE8GOg0hVseSilZkf7YeQfBIjNNGRzffdvkNBIKam7C_1y7Fzcou6K4nWZG3QyC4gNCw2cySJhEIKez1rYSW9xdt-mQm9yKfAAQ0A9Et4WtmhjzCjEjZ9U0W9SQF2IUH8GoLh13W2GJ2vfq5mVCQjwffRLB7ixxJp3KL8rkmbViB7z0SrhSfpxW9pqaMePrSrZzJ9RiGhjSrl4HpQOgyKSiT8EF7sfwjWPLz6AUCxldgtWj8FRIhUOfZWgRXHd2bBq7AMe5EdVxThEDdd8p9HcR6zoDmAy4D0dO2f1DhMozFkkrRegPNVeZxZjIfrzB6mXOyBqDDIIDBQgBGfHoHdgFWPjhrrIcIWZ5MVWCVLCLjU8U1M_XakL_q3DoHH9s36MuQIp3PPhzud-0w-UEjAo6KXV4j6woAHmS1HtdmMu3yLBpw5NbPiYWT3TuI9AdflgWYCMBE76bKQJ95PqrTOAgwRDbA8izyjHuEvvS-DfqYUfG1tkIq3MvOVFRn82F6bN80HeR5FaHNrQHB2Htf-cftx8z1CXhf5pPG2M3zwUFmdAZ60BOjN3horxq6H7ZceI7bvH6t9bHPGWBdFNSFBfGTq0s7Zwr4Yjs06GmBVEZol4QUE'
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