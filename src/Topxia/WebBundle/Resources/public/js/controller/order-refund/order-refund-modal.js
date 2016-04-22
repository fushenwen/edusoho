define(function(require, exports, module) {

	var Validator = require('bootstrap.validator');

    exports.run = function() {

        var $form = $('#refund-form');
        var $modal = $form.parents('.modal');

        $form.find('[name="reason[type]"]').on('change', function() {
            var $this = $(this),
                reasonType = $this.val();

            if (reasonType == 'other') {
                $form.find('[name="reason[note]"]').val('').show();
            } else {
                var reason = $this.find('option[value=' + reasonType +  ']').text();
                $form.find('[name="reason[note]"]').hide().val(reason);
            }
            $form.find('.warnning').text('');
        }).change();

        $form.on('submit', function() {
            if ($form.find('[name="reason[type]"]').val() == 'reason') {
                $form.find('.warnning').text('请选择退学原因');
            } else {                
                $modal.find('[type=submit]').button('loading');
                $.post($form.attr('action'), $form.serialize(), function(response) {
                    window.location.reload();
                }, 'json');
            }
            return false;
        });

        var validator = new Validator({
            
        });
        validator.addItem({
            element: '[name="reason[note]"]',
            required: true,
            display: '退学原因',
            rule: 'maxlength{max:120}'
        });

    };

});