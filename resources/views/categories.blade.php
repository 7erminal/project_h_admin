@extends('layout.app')

@section('content')
<div class="page-content">
                                
        <div id="number-of-services-hosted"></div>
        
        <div class="row">
            <div class="col">
                <button class="au-btn-plus" data-toggle="modal" data-target="#add-category" type="button">
                    <i class="zmdi zmdi-plus"></i>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" id="services-table">
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

<div class="modal fade" id="add-category" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Service</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post" action="/add-category">
            @csrf
            <div class="form-group">
                <label for="servicename">Service name</label>
                <input type="text" class="form-control" id="servicename" name="serviceName" aria-describedby="serviceName" required>
            </div>
            <div class="form-group">
                <label for="servicenamefrench">Service name in French</label>
                <input type="text" class="form-control" id="servicenamefrench" name="serviceNameFrench" aria-describedby="serviceName" required>
            </div>
            <div class="form-group">
                <label for="servicenamefrench">Service name in Portuguese</label>
                <input type="text" class="form-control" id="servicenameportugal" name="serviceNamePortugal" aria-describedby="serviceNamePortugal">
            </div>
            <div class="form-group">
                <label for="servicenamefrench">Service name in Spanish</label>
                <input type="text" class="form-control" id="servicenamespanish" name="serviceNameSpanish" aria-describedby="serviceNameSpanish">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Service Description</label>
                <textarea class="form-control" id="servicedescription" rows="2" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="servicedescriptionfrench">Service Description in French</label>
                <textarea class="form-control" id="servicedescriptionfrench" rows="2" name="descriptionFrench" required></textarea>
            </div>
            <div class="form-group">
                <label for="servicedescriptionportugal">Service Description in Portuguese</label>
                <textarea class="form-control" id="servicedescriptionportugal" rows="2" name="descriptionPortugal"></textarea>
            </div>
            <div class="form-group">
                <label for="servicedescriptionspanish">Service Description in Spanish</label>
                <textarea class="form-control" id="servicedescriptionspanish" rows="2" name="descriptionSpanish"></textarea>
            </div>
            <div class="form-group">
                <label for="serviceicon">Service icon</label>
                <input type="text" class="form-control" id="serviceicon" name="icon" aria-describedby="serviceIcon" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="delete-category" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Service</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post" action="/delete-category">
            @csrf
            Are you sure you want to delete?
            <input type="hidden" id="deletion_id" name="id" />
            <div class="mt-4 mr-auto">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Yes delete</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection