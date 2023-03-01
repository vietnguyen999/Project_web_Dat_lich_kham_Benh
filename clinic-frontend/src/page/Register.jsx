import './Login.css'

export const Register = () => {
    return (
        <div className="login " >
          <div className="App" >
            <img className="logo" src='' alt="Business view - Reports" />
            <form className="form">
              <div className="input-group">
                <label htmlFor="email">Họ và tên</label>
                <input type="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Đại chỉ</label>
                <input type="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Số điện thoại</label>
                <input type="email" name="email"/>
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="nome@gmail.com" />
              </div>
              <div className="input-group">
                <label htmlFor="email">passowrd</label>
                <input type="email" name="email" placeholder="nome@gmail.com" />
              </div>
              <div className="input-group">
                <label htmlFor="password">nhập lại password</label>
                <input type="password" name="password" />
              </div>
              <button className="primary">ADD</button>
            </form>
        </div>                      
      </div>
    )
}