import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent implements OnInit {
  images: any;
  selectedImg: number;
  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
        id: 1,
        url:
          'data:image/jpeg;base64,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',
        title: 'Img 1',
        show: true,
      },
      {
        id: 2,
        url:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFRUVFRUVFRUXFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0dHyUrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADUQAAEDAwMDAgMIAQQDAAAAAAEAAhEDBCEFMVESQZFhgRMicQYUMkKhscHR8FJiguEjY6L/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQFAQAG/8QAKxEAAgMAAQMEAAQHAAAAAAAAAAECAxEhBBIxEyJBURRhcbEFIzKBwfDx/9oADAMBAAIRAxEAPwDxcFdlNC6qBWDg48ldymNT2lEmCzoJ5TgTyU1OBRoFjgT6pxJjc+U2V0uRAjC48nymdR5Pkp5KbUCVJjYob1nk+Sl1nk+SuQuwkyY5RO9R5Pkp7CT3PkprVI0pMmPjEkaDG58rkHk+SntypqbPKS54PUNBSHcnyVwB3J8lFmmnsoIXad9IFax3J8lP6DyfJViy3XHUkr1h0aSsIPJ8lJoPcnyUeaEpnwV31RipImNJG58qOo0jufKKeyAoC4rsZadlXhAZ5PlR1JRTWymuYmKQmVYCZ5K7BRDqSQYj7hLqB4K4iC1RuaiTAcCMppKlLVG9EmLccGSkuJIgB4CTl0J3Sqc0lGApzVzpTy1eRxiCcmKRoRpgsc4YUSJFOQoXMgrsj0SNSdOE5lOVMymkyY+KIGMUooSjKVD0Uwox2U054V1wK/7oU5lsVa06aIbbHhRztaK4VJlbRtkZVtoMDgZRjLf0RdCynP7qOdxXCkp3Wy6yitD9wxMIR9oZwEr194HqgrxQS+7yryxsOqQ4RvHaTwFMLJoJEHA7xugd+DFSZt9CNwmU7WTIVxfWu+PRA0XdODsmRsbXB300mV9dmUI+mrR9Puh3sVEJi516CNbGf8K4YOymdRlRfDhNTEuLRC9ijcxFhqhdwjjIVKAO5MIUtRRkpyZPKIwhD1ESEyrTTEyecdQMkndKSMRjOp7XLpbCb0qrGiTdJIldATGlPDkawBnBCIogd0KQnufhc09mhbAmGjJwmW9VTh+fquSkMhEIt7XGVMaQxCRqYAHdT2zFNOZXXAfa0fRFm1Vjp1mCjqdlJhQWWF1dZU0LHOysKVjyFb07LsrG0seVm3X4W1xSKWlp3yxic/VT29jGIWjp6b6ImnaN26m+7h/azbL23iHqcYmfZYziF280huCNon1JWst9IJyBP0IP7Jt3pr4/CY+iU5TXLTX9jq6iDeJmCuafJMzPfEcKV1OWg9/+lfXmmTmMoSjYEHCONmop70yidal0zxI9VVXFnHZa29p9o/7VbVpSmwtaDjjM1VYEIacLRXFkNwqm6tyFZXamclAr+mDKiqN6t0Y5qjLFSpCZQAnU8IWoArGoq+q0p9bJbI4C1HJrClUYmgqpeCJ+R7m8Lh2S6lyV1ASwHISUwakmaTdhG5cCc5qar2ZiEE6U2F2F5HjsqZtGWk+EqNOTlHOp9EDcFdw8mVTcR6qUOU97aBrGuH0Q1NIlwUQRZUn4CtdPZKqrWmSr2xpFQ3T4NGmGmh00QNsq5srZV2l0tpWifUZRpuq1DDWiT/AA7k7Qsm634Rd24SkU6TC+o4Na3dxwFitf+37myy0YB/7Kgz9Ws/vwqfXdZfdP6nYYD8lOcNHJ5cefCBw3Jggc8+i5CiO7Na/oPseeQluqXFcF1w95A2yQD/wGPCp/vTg4w2BMgRn3TL3U3OdtjOD/AF2ROmw8kv6TERMAn+1Wq+xOTXH0CrNfbFlvpuoVHHqZ8hHdssJjjpW++zn2vuBALnVG/wCmrBPs/fzKwfxgxoDGg8qx0as45iDO3aOQVHKUo+6PCKJQjNZJaew2d7QucR0VIy0xP1adnBB3ujlpkZB7j+Vk7KoTBnIyCNwe2VvND1D4o6H/AIwPZ45+q5KqrqOP6Zfa+f1M+cbKOYvV9Ger2E9lWXOnxst3cafxsq2807use2M6pOMvKKaer0wd/bRtt/Kpbi3Wy1GzIlZ+6tSjptNWuaaMtdU4TOjCtLu2JVc8RhakJ9yPOIFXbCq6hVzctwqis1WUsjvQM4KIsRRamlVRkRSigR4TZRL6ageE6LJbI4dC6mdSSLBeh3wA5CVrchWjGcJ1WhLSTsAtZx0w9wpgxPDFLb05MK2tLIfVcUTzZU07cq0t7eW57JVmNa7plWYYPhE8NJ+uELQcWVdxRFVvSNvyngqoNFzDDhBH+bqQXRH4cZlStunEOB/MpZltQRY1CtNp7Nln9NpiQtdp1LYcLK6lmv0yNBpFrMFZv7d6oX1PgA/+OkfmjZz+8/Tb3K11KsKVF9Q/kaXe4GB5Xkep3RL998k8k5JWfRDvs36Km85OfHgjtyZUFzqhOABA78qOvtJ9AED8RacK4vknsta43B1SpOT3RunU+pwGY5/zuo7dw6ctBAMkztO37FXdgGxLcei5dZ2xzDlNOvubLWxtQwycg+YVvb1Wztj0/dVFs47+ysbR2R67rGtbNGMTRWAgj1Wq0huQRgjIKy1g3sDjstVpO8qSVjXgC+PtNlSAc2eUHc0N0TYuxC7dBaPVQjf0quflef8Af1PnotxnhkdQtlQ3ll32W3vKQ4Wfv6S+eScXhtdLc2YbUGdgqKpTzBWvv6G6y9+wgrT6afwa+6gS8tR+XYDflUVyzurwgu2J91XXVvC0qZZwye+OoqwFJSpTupYTKRz6KvSFxwir04QFQSrWqyd1BUto2T65fZPdDfBWQkijSST+4j9MuKDMLt/VAb0DuEUz0hA3Fu4GXDHY/VbT8GEBUaJaJwrjTavaN8IK+owxp9VJYPmYMGPPuuLg4yv1NvTUdnIKKpaxDA0jKi1O3B+Yb5J/mFWgQcpMlg2I6oZcSBAPZTUmFJsFSUsFTTRXWyxsWELZaK2YWUs3LV6S+IWX1MeDW6eRb/aUxZvA7lg9i8T+y8nvMOXrGvZtnehYf/oD+V5VqI/8hj1x6qPpOJNFU37Ad9UAQQCoWsb3G/6Ieo8ylSqFaKhi4JPVTeMIuaUfRWVKt0NHTnj1VVRBcOlP6C0j5vZBKO8MdCePuS8mmtnEgevZXVi+e4wVlady8tAaM7yuirUa7DvQ9Jwckyeyz7KHL5w0YTSPVNKcHDce230Wm0x/C81+xlw6CJ2Mn+5XoWkVBglZVsO1uP0DfH2s19gc+yLrnCgsRMKa8/CtHpW4dBY3+f7I+cnzYVtY7qh1J4VteVICzmo1QvmFLTX6OvWUWoVd1mdSeCr3Un4Kyl7VOVq9JDeTcxJED6yrrmopQ5Nfb9WdhyteCUXyTT2S4BCV22ZmU6rQA2lNbwnrxwRyXPJJXjMII1iEc2n2KFrUI3Tq8J7E/JB0ykpQF1UCS0tDKtW0muHSchVdm3KsGVoOV9AkfLyKrV7YtiePZC0aLumWzM/WfRaa8Y19Mtn6KmtqT2H/AG7H+0MlyeT4K6rJ3CEq2/p5WjvazYHyyef7UDajHQHhLlEOLKSi1E/B7o67sWj5mEFv6j6qFnCnnEphIItey0emVNlQW9NW9iFnXw4NLp5mrDPiUns7uaQPr2/WF5dqlE9Wcdl6RpzyCs19tdN6anWB8r/mHo78zf591lR9lhpRerDz25ZBTWBWNekHDq7/ANeiC6FpxnqIZ1tS0ntd1YPY2QY2GZ5VdRcewRbabiC4x5hKsXOlVT4JHVnZABP04+iO0toPTJPUJ+Qztn3VTSuCDjfKtLK2qBhqN/FuMyYHA9yk2rI54KqZ7LfJqNIc5v4RuRIEYj/Vz/C2llUOCSsH9lrV5JcZ2nM57ra6cwmBEnYHkk4hY9sP5jS5LLJrtPR9ArdTJ4ge6n1OtAhLS7X4VJrTuBLj/uO/9eyp9WuZkhN/iNn4bo40rzL9vL/wj5uEFbe3HwDXV0DIKzt1ScSYUl5coI32MHK+fqj9n0XT0uC1FJqtQhZG/q7rV3zC6TE/52VM6x/1CFtdK1FFU9axFfpVAwXEdsfrK7cYwOEX22gIauIlXJ90tFNdscAn143Q5qAlPuRKHpsM4VcYrCGxvcCXO7oasZRBpmMqLoTYCbCENKSJDUk3RPaDWmoEd1aG7B2WVpvhH0q63Iz0+ZlAu2XSItb4Ss+6oirMolIFxNTSZSqRIzvwpr3QA7NPuNj2+n6qotqkQtHp140D5jhE/ACWMylSyc3BB7z7KAUcrf16VN/4hIMgOHrAj13VDqmjfDfDctjqE9h6qeSKYFZQZhWVplCMZCvNBoU3dRdnp9vfCjtjwWVSLC1oEGN++OFaXemMr0HMdMHuN2u7Ob6hVxPQQ4H2+qvdNuC7Bg/osi6vTQjNni32g0p9Cp8OoPVruzhyP67Kqa2Dle6anoza7HNqNBEmB3Hq0jYrzzU/sPVaSaQNVg7AAVG+hbs728Ia+oS9s+B2qXPyZCoRPy7Lgc7acIy40x7T0lrgRuCCP0OQi7XRnuGYA57pztglrYxVSbKhjOTPpMrTaI0gDp291DR0gMI6h1meYgcwVqNE0G4rlvwqbukfmI6WD/kd/ZS32+ou2PI+vKlsuAmhLQByF6T9j9ELQK1UQ6Pkad2g/mI7HgdlD9n/ALKUreKlZwqVBkE/gaf9oO59Sj9S1uPlZt3PdIc6ukXfZ5+I/JFbbO/2VePlhWs6iAOhp+p/hZi7vFDd3c91U1q5J3WDdZPqLHZP/i+jR6TolCJ25dJlQUaYmZ/RIhx2BIPfsn0PlJ6t/qm11l8pYsRHegN77rM6nc4MQUdrt/OB2WaqOWjTX8i+7ESffFDXrkoYnK4H4V8YYxUrG0cKkbDRKGJyn1PwlUYTNg1W7PKhFc8qCoVHKqjBGfO1tluyqIXUC2pAXF7tO+oAkQutJTOpSMctUwCdhlF0HQgWuRlKqDumRYLL60cDCLqGFTW1yArFtcOCcnwBnJdW1X5QtPbMbVp8OAgO7/8AaxFC5gK00/U3M22QTWobEtLrQKZBhxB3yJ232UFtovQWuFYAHvHfiCdk2peucDk5QNR5jdSWRY+DL9to8v8AxMdGxJGZ9Oys9OrCA0tc1wMTGJC8/p3b2uwTutnp2ptqAdYLXblw2J2WfZArjI0AqHY78xCrnXzWE5zJMHvPCT6opM6g/qmSJ7+gWYrXDnPz3Kz7qtKK2ab73TqCHtaRw4Aj9V1ltbxPwKZ/44/RV1vbyMEz2nb2P1T2XLmjfvkf2syyqUXqeFcYpovLM0G5Zb0QeQwT5Rj9YfsCB9As2bw9QgEds+qmZdzvj+UmU78zuYa6aDetaH3F685mfqqy5vHTCZWvADEqN1Rk9RMmMTsp/wAPzrLq4qPwROcXGDjfwgKr3NdG+UTb3gLiXOjjhRVb18npEjsnRpRR3sMtnuDYMz27ABU11cub1CclJ2qmSTIO0IG9cXS4HAzKfGsS5CrVGubJ339VQ3W5jZSXRdJIMT2/dCtuex3VtVeLRbs3gilJxTataEzrlVKIpyE4pOqYTSoatROitETlhFVaEM4Kao5QuKoiiGx6IOSUaSPBGgzSpGuUYCc0KpaZ7J10PUbXQnF0pqYDRKysVaWd9CqGgJzZ7I4ywE0NO8lG0rrusxTuIRlC7R9wSNVa3ysGw4fVZOhdZVzb3gjBQSWjEw+pZ5GFa2hY1vS50Efsq22rh5En6Id1Tqf09XeJUlkB8ZGnvXtdTlhw3tzz7qgfdScoq4b00ZaSec9lRdcqOdZRGRsNN1GQATsVb1HtfEQCMjAKwZvoA6cRuiqGoOJBDoMqKysrhLS+1alDIaQHTOcTv391VM1ItbBMkbCD7pz7ipUJa7Y4MR+iG0+3e15c9hiDBMb4Ukq0XVyw5UfUqDqJDA3uTEz2AR1tYtMHrxGcz4VNqmqT8sAQTkKaw1NobHEoHWUKZYVqNJv5yd9ohcpsjDXBw3HYqor1x/KczVoEAALyrOuf5hF1VBkOb/n1VfeXIg9sJte4GfXKqbp8hNhVvknnZg2rXgbyq2vXzKe9shAVz5WhXWiSdzJ/jypW+irQ5T0q0Jrr+gFdvksOoRlB3Lkx9WVEXrsYYDO3UclJwXJTjUTUT6NSTOpJHgvuRCAnSmrrVVhnskn0TSlKe0SjzQfAwpwqQuuamFq400eTJmmU9khQNClD15Hg2m71VnagjgqhY8yjKNxCNMJM01kTynOt/mwVT0LrlGUNREwdkMo6GpFjbah0EgGRkEHZNuqjTBZA9O6BqVKYzEz2lOtyx20gj1mVLZAfCZPTzj91PYOb1fOYAzHKgLQCDI9tk28ewjETyP2KisgWVyLAXwFQlpPTOy7eagXCOogEbd1mnOIM5RDb2Tv/AJwppVlcLCSrbuOcqIUnDeQE776R+ZQ3moOIiVxRbD9RILZV9VDcMjuqgXsGCVJVucSCi9IW70ww1XDuhqtZQGtPdD1ymRrEytH1Kx7ISo5ShR1Wp8UkIlJkBKlpJhapaTUwBSJDTUbgiMwoC7K4gnIicUwlOcmFGkLkxSkmpLovTgK7KYnhWEzHtKeFGE8ORpANDwV0FMldDkQGDnFRkpxcuYQNHUPpPRDIQrUupdR0tBUCTqgVc2oU/wCNK9p1MJNwU+lckHCAdKc15S5IZGReUqpcN4hdNaMFVNGqZ3RjbgdwppwKY2BDnSoQ6CoutQ1Hqd1jlaSXVZBGuUnvXBUXlDDzs0TSu9aa5yjcu9pzvJWvTqibRpKd4CF+Tq5B2BOc5PcxRxyuo4yIrock9cYYTEBoTRfiCoKrU+k4TJXay6kebBpXCnEJqMBsbCS6urwOjwwcBODRwEkloYSD2sHA8KX4Y4HhJJdRw50DgeEiwcDwuJLzPHegcDwuBg4HhJJAeHdA4HhL4Y4HhJJCeHBg4HhO6BwPCSS6zo8MHA8LppjgeEkkJ1EjKY4HgKZlMcDwEkkuQ1EjWDgeFHUpjgeAupJDHIGfTHA8BQOpjgeF1JAzpH0DgeE5jBwPCSSFhIJoMHA8JVGjgJJJbGrwSdA6dhsg67RwupLyOSBnBNhJJNQA4BSRhJJGjjInBNhJJdQsXSOEkkkYJ//Z',
        title: 'Img 2',
        show: false,
      },
      {
        id: 3,
        url:
          'data:image/jpeg;base64,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',
        title: 'Img 3',
        show: false,
      },
      {
        id: 4,
        url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU',
        title: 'Img 4',
        show: false,
      },
     
    ];
  }

  selectMethod(e) {
    this.selectedImg = e.target.value;

    e = e.target.value;
    this.images.forEach((img) => {
      img.show = img.id == e ? true : false;
    });
  }
}