import React from 'react';
// import '../../../assets/admincss/css/colors/green.css';
// import '../../../assets/admincss/css/main.css';

// <link rel="stylesheet" href="../css/colors/green.css">
export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-icon" />
                <div className="header-logo" />
            </div>
            <div className="header-right">
                <div className="header-select">
                    <div className="header-select-icon" />
                    <div className="header-select-text">
                        CỬA HÀNG DI ĐỘNG CHÍ NGUYỄN MOBILE
                    </div>
                    <div className="header-select-icon-down">
                    </div>
                </div>
                <div className="header-icloud">
                    <div className="header-notification" />
                    <button className="header-img-info" />
                    <div className="header-text-name" >Nguyễn Phúc Hưởng</div>
                    <div className="header-name-down" />
                </div>
            </div>
        </div>

    )
}
