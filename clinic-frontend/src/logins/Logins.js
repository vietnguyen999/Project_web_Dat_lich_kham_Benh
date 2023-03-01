import React from 'react'
function Logins() {
  return (
    <div className="App">
    <img className="logo" alt="Business view - Reports" />
    <form className="form">
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="nome@gmail.com" />
      </div>
      <div className="input-group">
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" />
      </div>
      <button className="primary">ENTRAR</button>
    </form>
    <div className='forgot-passwords' >
        <div className='forgot-password-handle' >
            <a className='underline text-blue-700' href='#' >Quên mật khẩu</a>
        </div>
        <div className='create-account' >
            <span>Bạn chưa có tài khoản <a className='underline text-blue-700' href='#' >Tạo ngay</a></span>
        </div>
        
    </div>
  </div>
)
}

export default Logins