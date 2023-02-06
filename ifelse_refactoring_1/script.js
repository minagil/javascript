const naverLogin = (id) => {
  return "네이버";
}
const kakaoLogin = (id) => {
  return "카카오";
}
const facebookLogin = (id) => {
  return "페이스북";
}
const googleLogin = (id) => {
  return "구글";
}

const SocialLoginMap = {
  'naver': naverLogin,
  'kakao': kakaoLogin,
  'facebook': facebookLogin,
  'google': googleLogin,
}
const socialLogin = (where, id) => {
  const domain = SocialLoginMap[where](id);
  return `${domain} ${id}`;
  }


console.log(socialLogin('naver', "royjung"));
console.log(socialLogin('google', "royjung"));

/* ******************************************************** */
const getSeason = (month) => {
  const shifteMonth = Math.floor(((month + 9) % 12) / 3);
  console.log(shifteMonth)
  switch (shifteMonth){
    case 0:
      return "봄";
    case 1:
      return "여름";
    case 2:
      return "가을";
    case 3:
      return "겨울 ";   
  }
}
console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));

/* ******************************************************** */
const SeasonMap = {
  0: "봄",
  1: "여름",
  2: "가을",
  3: "겨울",
}
const getSeason = (month) => {
  const shifteMonth = Math.floor(((month + 9) % 12) / 3);
  return SeasonMap[shifteMonth]
}
console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));

/* ******************************************************** */

const Seasons = ["봄","여름","가을","겨울"];
const getSeason = (month) => {
  const shifteMonth = Math.floor(((month + 9) % 12) / 3);
  return Seasons[shifteMonth]
}
console.log(getSeason(2));
console.log(getSeason(5));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));



/* 
-3월 ~ 5월 : 봄
-6월 ~ 8월 : 여름
-9월 ~ 11월 : 가을
-12월 ~ 2월 : 겨울
 */

// const getSeason = (month) => {
//   if(month >=3 && month <=5) return "봄";
//   if(month >=6 && month <=8) return "여름";
//   if(month >=9 && month <=11) return "가을";
//   if(month >=12 || month <=2) return "겨울";
// }

/* 
0 미만 :몹시 추워요.
0 이상 10 미만 : 추워요
10 이상 20 미만 : 신선해요
20 이상 30 미만 : 조금 더워요
30 이상 40 미만 : 더워요
40 이상 : 몹시 더워요
*/

const getWeather = (temperature) => {
  const scroe = Math.min(Math.max(Math.floor(temperature / 10), -1),4);
  switch (scroe) {
    case -1: return "몹시 추워요";
    case 0:
      return "추워요";
    case 1:
      return "신선해요";
    case 2:
      return "조금 더워요";
    case 3:
      return "더워요";
    case 4:
      return "몹시 더워요"  ;
  }
}

console.log(getWeather(-15));
console.log(getWeather(5));
console.log(getWeather(15));
console.log(getWeather(25));
console.log(getWeather(35));
console.log(getWeather(55));