import './Login.css'

export const Login = () => {
    return(
        <div className='login'>
          <div className="App">
        <img className="logo" alt="Business view - Reports" />
        <form className="form">
          <div className="input-group">
            <label htmlFor="email text-red-800">Email</label>
            <input type="email" name="email" placeholder="nome@gmail.com" />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Login</button>
        </form>
        <div className='forgot-password' >
            <div className='forgot-password-handle' >
                <a className='underline text-blue-700' href='#' >Quên mật khẩu</a>
            </div>
            <div className='create-account' >
                <span>Bạn chưa có tài khoản <a className='underline text-blue-700' href='#' >Tạo ngay</a></span>
            </div>
            
        </div>
      </div>
        </div>
    )
}