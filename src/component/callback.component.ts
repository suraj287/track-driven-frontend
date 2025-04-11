import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-callback',
  template: '<p>Loading...</p>'
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router) {}

  ngOnInit() {
      const code = this.route.snapshot.queryParamMap.get('code');
      console.log(code)
    if (code) {
      this.auth.handleCallback(code).subscribe((res: any) => {
        console.log('test123',res)
        this.auth.setToken(res.token,res.accessToken);
        this.router.navigate(['/table']);
      });
    }
  }
}