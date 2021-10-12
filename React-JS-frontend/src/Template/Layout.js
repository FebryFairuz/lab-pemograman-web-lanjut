import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div id="kt_header" className="header header-fixed">
                            <div className="container d-flex align-items-stretch justify-content-between">
                                <div className="d-flex align-items-stretch mr-3">
                                    <div className="header-logo">
                                        <a>
                                            Logo
                                        </a>
                                    </div>
                                    <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                                        <div id="kt_header_menu" className="header-menu header-menu-left header-menu-mobile header-menu-layout-default">
                                            <ul className="menu-nav">
                                                <li className="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here" data-menu-toggle="click" aria-haspopup="true">
                                                    <a href="javascript:;" className="menu-link menu-toggle">
                                                        <span className="menu-text">Dashboard</span>
                                                        <i className="menu-arrow"></i>
                                                    </a>
                                                </li>
                                                <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" aria-haspopup="true">
                                                    <a href="javascript:;" className="menu-link menu-toggle">
                                                        <span className="menu-text">Features</span>
                                                        <span className="menu-desc"></span>
                                                        <i className="menu-arrow"></i>
                                                    </a>
                                                </li>											
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="topbar">
                                    <div className="dropdown">
                                        <div className="topbar-item">
                                            <div className="btn btn-icon btn-hover-transparent-white d-flex align-items-center btn-lg px-md-2 w-md-auto" id="kt_quick_user_toggle">
                                                <span className="text-white opacity-70 font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                                                <span className="text-white opacity-90 font-weight-bolder font-size-base d-none d-md-inline mr-4">Sean</span>
                                                <span className="symbol symbol-35">
                                                    <span className="symbol-label text-white font-size-h5 font-weight-bold bg-white-o-30">S</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                            <div className="subheader py-2 py-lg-12 subheader-transparent" id="kt_subheader">
                                <div className="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                                    <div className="d-flex align-items-center flex-wrap mr-1">
                                        <div className="d-flex flex-column">
                                            <h2 className="text-white font-weight-bold my-2 mr-5">Dashboard</h2>
                                            <div className="d-flex align-items-center font-weight-bold my-2">
                                                <a href="#" className="opacity-75 hover-opacity-100">
                                                    <i className="flaticon2-shelter text-white icon-1x"></i>
                                                </a>
                                                <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                                <a href="" className="text-white text-hover-white opacity-75 hover-opacity-100">Dashboard</a>
                                                <span className="label label-dot label-sm bg-white opacity-75 mx-3"></span>
                                                <a href="" className="text-white text-hover-white opacity-75 hover-opacity-100">Latest Updated</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="d-flex flex-column-fluid">
                                <div className="container">....</div>
                            </div>
                        </div>
                        <div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
                            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div className="text-dark order-2 order-md-1">
                                    <span className="text-muted font-weight-bold mr-2">2021©</span>
                                    <a target="_blank" className="text-dark-75 text-hover-primary">Febry D Fairuz @ IBIK - Pemograman Web Lanjut</a>
                                </div>
                                <div className="nav nav-dark order-1 order-md-2">
                                    <a className="nav-link pr-3 pl-0">About</a>
                                    <a className="nav-link px-3">Team</a>
                                    <a className="nav-link pl-3 pr-0">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
