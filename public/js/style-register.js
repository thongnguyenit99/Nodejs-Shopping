$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Bạn hãy nhập vào họ tên'
                    }
                }
            },
            DD_MM_YY: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Bạn hãy nhập vào tháng/ngày/năm'
                    }
                }
            },
            user_name: {
                validators: {
                    stringLength: {
                        min: 6,
                    },
                    notEmpty: {
                        message: 'Bạn hãy nhập vào username'
                    }
                }
            },
            user_password: {
                validators: {
                    stringLength: {
                        min: 3,
                    },
                    notEmpty: {
                        message: 'Bạn hãy nhập vào mật khẩu'
                    }
                }
            },
            confirm_password: {
                validators: {
                    stringLength: {
                        min: 3,
                    },
                    notEmpty: {
                        message: 'Bạn hãy nhập vào mật khẩu xác nhận'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Bạn hãy nhập vào email'
                    },
                    emailAddress: {
                        message: 'Nhập đúng định dạng Email'
                    }
                }
            },
            contact_no: {
                validators: {
                    stringLength: {
                        min: 12,
                        max: 12,
                        notEmpty: {
                            message: 'Nhập đúng số điện thoại liên hệ'
                        }
                    }
                },
                country: {
                    validators: {
                        notEmpty: {
                            message: 'Please select your Country'
                        }
                    }
                },
            },
       
        reCaptcha: {
            validators: {
                notEmpty: {
                    message: 'Bạn hãy nhập vào mã kiểm tra'
                }
            }
            }
        },
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });
});