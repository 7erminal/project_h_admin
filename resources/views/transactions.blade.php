@extends('layout.app')

@section('content')
<div class="page-content">
                                
                                <div id="requests-overview-count"></div>
                              
                                <div class="row">
                                    <div class="col-lg-8">
                                        <!-- RECENT REPORT-->
                                        <div class="recent-report3 m-b-40">
                                            <div class="title-wrap">
                                                <h3 class="title-3">Requests</h3>
                                                <div class="chart-info-wrap">
                                                    <div class="chart-note">
                                                        <span class="dot dot--blue"></span>
                                                        <span>Blue</span>
                                                    </div>
                                                    <div class="chart-note mr-0">
                                                        <span class="dot dot--green"></span>
                                                        <span>green</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="filters m-b-55">
                                                <!-- <div class="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                                    <select class="js-select2" name="property">
                                                        <option selected="selected">Products Sales</option>
                                                        <option value="">Products</option>
                                                        <option value="">Services</option>
                                                    </select>
                                                    <div class="dropDownSelect2"></div>
                                                </div> -->
                                                <div class="rs-select2--dark rs-select2--sm rs-select2--border">
                                                    <select class="js-select2 au-select-dark" name="time">
                                                        <option selected="selected">Duration</option>
                                                        <option value="">30 days</option>
                                                        <option value="">60 days</option>
                                                        <option value="">90 days</option>
                                                    </select>
                                                    <div class="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                            <div class="chart-wrap">
                                                <div id="rep3-chart"></div>
                                                <canvas id="recent-rep3-chart"></canvas>
                                            </div>
                                        </div>
                                        <!-- END RECENT REPORT-->
                                    </div>
                                    <div class="col-lg-4">
                                        <!-- CHART PERCENT-->
                                        <div class="chart-percent-3 m-b-40">
                                            <h3 class="title-3 m-b-25">chart by %</h3>
                                            <div class="chart-note m-b-5">
                                                <span class="dot dot--blue"></span>
                                                <span>Requests</span>
                                            </div>
                                            <div class="chart-note">
                                                <span class="dot dot--red"></span>
                                                <span>Request Notices</span>
                                            </div>
                                            <div class="chart-wrap m-t-60">
                                                <div id="requests-pie-chart"></div>
                                                <canvas id="percent-chart2"></canvas>
                                            </div>
                                        </div>
                                        <!-- END CHART PERCENT-->
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12" id="hosts-table">
                                        <!-- DATA TABLE-->
                                        <!-- END DATA TABLE                  -->
                                    </div>
                                </div>

                                <div class="row my-4">
                                    <div class="col-md-12" id="message-table">
                                        <!-- DATA TABLE-->
                                        <!-- END DATA TABLE                  -->
                                    </div>
                                </div>

                                <!-- <div class="row">
                                    <div class="col-lg-6">
                                        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
                                            <div class="au-card-title" style="background-image:url('images/bg-title-01.jpg');">
                                                <div class="bg-overlay bg-overlay--blue"></div>
                                                <h3>
                                                    <i class="zmdi zmdi-account-calendar"></i>22 May, 2018</h3>
                                                <button class="au-btn-plus">
                                                    <i class="zmdi zmdi-plus"></i>
                                                </button>
                                            </div>
                                            <div class="au-task js-list-load au-task--border">
                                                <div class="au-task__title">
                                                    <p>Tasks for John Doe</p>
                                                </div>
                                                <div class="au-task-list js-scrollbar3">
                                                    <div class="au-task__item au-task__item--danger">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Meeting about plan for Admin Template 2018</a>
                                                            </h5>
                                                            <span class="time">10:00 AM</span>
                                                        </div>
                                                    </div>
                                                    <div class="au-task__item au-task__item--warning">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Create new task for Dashboard</a>
                                                            </h5>
                                                            <span class="time">11:00 AM</span>
                                                        </div>
                                                    </div>
                                                    <div class="au-task__item au-task__item--primary">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Meeting about plan for Admin Template 2018</a>
                                                            </h5>
                                                            <span class="time">02:00 PM</span>
                                                        </div>
                                                    </div>
                                                    <div class="au-task__item au-task__item--success">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Create new task for Dashboard</a>
                                                            </h5>
                                                            <span class="time">03:30 PM</span>
                                                        </div>
                                                    </div>
                                                    <div class="au-task__item au-task__item--danger js-load-item">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Meeting about plan for Admin Template 2018</a>
                                                            </h5>
                                                            <span class="time">10:00 AM</span>
                                                        </div>
                                                    </div>
                                                    <div class="au-task__item au-task__item--warning js-load-item">
                                                        <div class="au-task__item-inner">
                                                            <h5 class="task">
                                                                <a href="#">Create new task for Dashboard</a>
                                                            </h5>
                                                            <span class="time">11:00 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="au-task__footer">
                                                    <button class="au-btn au-btn-load js-load-btn">load more</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="au-card au-card--no-shadow au-card--no-pad m-b-40 au-card--border">
                                            <div class="au-card-title" style="background-image:url('{{ asset('assets/images/bg-title-02.jpg') }}');">
                                                <div class="bg-overlay bg-overlay--blue"></div>
                                                <h3>
                                                    <i class="zmdi zmdi-comment-text"></i>Chat</h3>
                                                <button class="au-btn-plus">
                                                    <i class="zmdi zmdi-plus"></i>
                                                </button>
                                            </div>
                                            <div class="au-inbox-wrap">
                                                <div class="au-chat au-chat--border">
                                                    <div class="au-chat__title">
                                                        <div class="au-chat-info">
                                                            <div class="avatar-wrap online">
                                                                <div class="avatar avatar--small">
                                                                    <img src="{{ asset('assets/images/icon/avatar-02.jpg') }}" alt="John Smith">
                                                                </div>
                                                            </div>
                                                            <span class="nick">
                                                                <a href="#">John Smith</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="au-chat__content au-chat__content2 js-scrollbar5">
                                                        <div class="recei-mess-wrap">
                                                            <span class="mess-time">12 Min ago</span>
                                                            <div class="recei-mess__inner">
                                                                <div class="avatar avatar--tiny">
                                                                    <img src="{{ asset('assets/images/icon/avatar-02.jpg') }}" alt="John Smith">
                                                                </div>
                                                                <div class="recei-mess-list">
                                                                    <div class="recei-mess">Lorem ipsum dolor sit amet elit</div>
                                                                    <div class="recei-mess">Donec tempor viverra</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="send-mess-wrap">
                                                            <span class="mess-time">30 Sec ago</span>
                                                            <div class="send-mess__inner">
                                                                <div class="send-mess-list">
                                                                    <div class="send-mess">Lorem ipsum dolor sit amet elit</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="au-chat-textfield">
                                                        <form class="au-form-icon">
                                                            <input class="au-input au-input--full au-input--h65" type="text" placeholder="Type a message">
                                                            <button class="au-input-icon">
                                                                <i class="zmdi zmdi-camera"></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                @include('components.footer')
                            </div>
@endsection