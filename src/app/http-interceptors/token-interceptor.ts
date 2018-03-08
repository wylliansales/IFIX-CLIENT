import {Injectable} from '@angular/core'
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4ZjU3MTcwNTVlMWFiMTQ2M2FlYzIyMDExZDMwZTQ1ZDMzYWJhZTU0N2ZiOWFiZjA0OWEzNjM0ZTM4ODhmMTM2MWIwZWU2NzMwZjdjNWQ1In0.eyJhdWQiOiIyIiwianRpIjoiNjhmNTcxNzA1NWUxYWIxNDYzYWVjMjIwMTFkMzBlNDVkMzNhYmFlNTQ3ZmI5YWJmMDQ5YTM2MzRlMzg4OGYxMzYxYjBlZTY3MzBmN2M1ZDUiLCJpYXQiOjE1MjA1MjkxMTcsIm5iZiI6MTUyMDUyOTExNywiZXhwIjoxNTUyMDY1MTE3LCJzdWIiOiIxMDEiLCJzY29wZXMiOlsibWFuYWdlLXVzZXIiXX0.olgQ--qMK4JgLkHdchfN0XglIEpa68EjmlYNVn3JXPQ59NaSnKFhVoFC_MWEjk6FMNetuPfucAggEVsXpCARX3Y3FHT0749yNReQ9S87twfoDezsKD5aWJ-wlBxefwVlHLMmW8ixBWGdBshqNS7uIHbWTxxe2tfKIPFEzQzMKRfYrBiMwXMInP9Vs9SuGMiOBoSz4yUK8c0QHkZSqnpa9myj_CO8k11E6jo_NHt6Co_bKgcp7MwOagemPbCua22XMPSTcyt8J-Vtc67lfHQES-PzmSwxyhriw3brTZvXVD89WMF1TBZEzXw6c6t5IoP8ywaE8uHCGuqKoFN2Qy32DvwIg3dqObiAkt6n6eJcbrrZuHNLDp_H4uVc5zzlxogYNOCaPFWlPM50pYWx86LA-hM8Pi1PR2MUh0unHqpgwbLHEDL2JgMxbzz0x0CHIyAjUBFXoAmBqL_3tCXCMO7SLaL2fbjsPAL-Ss0Yg1mt9EKppGFZ6FAL1ejafNPktjtyXd9nVD04A08Ek_BSeZikJ-tvE43EZdiH7K3wMT7iI5WkbZLoAL1hLO8BvDpL2RkzOpgyhJ5m4rQ4hFTQ124n8oQHnsAuHkAfEMAKAtyQ9AbpGuWLBRopxDC7r1oVYRGXS__QcMjO32LVjJZvEWt_aD_Nxshpng_5l639iqqeFo0'
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