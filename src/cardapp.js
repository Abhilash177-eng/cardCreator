import React, { useState } from 'react'
import './App.css'
function Cardapp() {
    const jsonData = [];
    var [show, setShow] = useState(0);
    var [fullname, setFullname] = useState(' ');
    var [email, setEmail] = useState('');
    var [mobilenum, setMobilenum] = useState('');
    var [imageurl, setImgurl] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        let x =
        {
            fullname: document.getElementById('1').value,
            email: document.getElementById('2').value,
            mbnumber: document.getElementById('3').value,
            imgurl: document.getElementById('4').value,
        }
        jsonData.push(x);
        setFullname(fullname = x.fullname);
        setEmail(email = x.email);
        setMobilenum(mobilenum = x.mbnumber);
        setImgurl(imageurl = x.imgurl);
        setShow(show = 1);
    };
    return (
        <div className="cointainer">
            <div className="content">
            </div>
            <div className="hfg">
                <form onSubmit={handleSubmit}>
                    <input id="1" placeholder="name" name="fullname" className="inputclass" />
                    <input id="2" type="text" name="email" placeholder="email" className='loginget' style={{ marginTop: "20%" }} />
                    <input id="3" type="text" name="mbnumber" className='loginget' placeholder='number' style={{ marginTop: "33%" }}></input>
                    <input id="4" type="text" name="imgurl" className='loginget' placeholder='imgurl' style={{ marginTop: "46%" }}></input>
                    <button className="buttonclass"> Create Card </button>
                </form>
            </div>
            <div>
                {show === 1 ? <div className='cardbox'><div className='imgcontainer'> <img src={imageurl} style={{ width: "100%", height: "100%", objectFit: "contain" }} /> </div> <div className='description'> <span>{fullname}</span> <br></br> <span>{email}</span> <br></br> <span>{mobilenum}</span> <div><button className="deletebutton" onClick={() => setShow(show = 0)}> Create Card </button> </div> </div></div> : <div> </div>}
            </div>
        </div>
    )
}
export default Cardapp