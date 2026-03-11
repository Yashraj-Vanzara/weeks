export const formValidation=(email:string,password:string)=>{
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if(!emailPattern) return "Invalid email"
if(!passwordPattern) return "Invalid Password"

return null
}