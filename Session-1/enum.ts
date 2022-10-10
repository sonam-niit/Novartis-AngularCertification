enum Days{Sunday=1,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday};
let today:Days=Days.Monday;
console.log("Today is "+today);
console.log(Days.Friday);

enum StatusCodes{
    NotFound=404,
    Success=200,
    Accepted=202,
    Unauthorized=401,
    BadRequest=400,
}
console.log(StatusCodes.NotFound);