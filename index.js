$(document).on('ready', function (e) {
        /* Table select / checkboxes utility */
    $('.checkboxs thead :checkbox').change(function(){
        if ($(this).is(':checked'))
        {
            $('.checkboxs tbody :checkbox').prop('checked', true).parent().addClass('checked');
            $('.checkboxs_actions').show();
            jQuery( "input", $('.table').dataTable().fnGetNodes() ).prop('checked', true).parent().addClass('checked');
        }
        else
        {
            $('.checkboxs tbody :checkbox').prop('checked', false).parent().removeClass('checked');
            $('.checkboxs tbody tr.selectable').removeClass('selected');
            $('.checkboxs_actions').hide();
            jQuery( "input", $('.table').DataTable().fnGetNodes() ).prop('checked', false).parent().removeClass('checked');
  
        }
    });
    
    jQuery( "input", $('.table').dataTable().fnGetNodes()).each(function(result){
    	
    	//Do stuff
    	
    });

});