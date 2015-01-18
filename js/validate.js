function Validate(form) {
    this.formIsValid = true;
    this.form = form;

    this.checkField = function (el) {
        switch (el.tagName) {
            case "SELECT":
                this.markField(el.selectedIndex != 0, el);
                break;
            case "TEXTAREA":
                this.markField(el.value && el.value != el.defaultValue, el);
                break;
            case "INPUT":
                switch (el.getAttribute('type')) {
                    case "text":
                        this.markField(el.value && el.value != el.defaultValue, el);
                        break;
                    case "email":
                        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
                        this.markField(regex.test(el.value), el);
                        break;
                }
                break;
        }
    }

    this.markField = function (val, el) {
        if (val) {
            $(el).next('.error').addClass('invisible');
        } else {
            $(el).next('.error').removeClass('invisible');
            this.formIsValid = false;
        }
    }

    this.clearAll = function () {
        for (var i = 0, len = this.form.length; i < len; i++) {
            if (this.form[i].tagName == "SELECT") {
                this.form[i].selectedIndex = -1;
            } else {
                this.form[i].value = this.form[i].defaultValue;
            }
        }
    }

    for (var i = 0, len = this.form.length; i < len; i++) {
        if (this.form[i].hasAttribute('required')) {
            this.checkField(this.form[i]);
        }
    }

}
