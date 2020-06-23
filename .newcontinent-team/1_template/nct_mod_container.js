
var __pure__waiting__fn = window.__pure__waiting__fn || [];

__pure__waiting__fn.push( function()
{
    var evt_handle = new __pure__mod__.EventHandle({Context:this, fn: function(evt){

        jscraft.fetch("module_content")

    }});

    if(typeof (window.nct) !== 'undefined')
    {
        evt_handle.fn();
    }
    else 
    {
        window.__pure__.onTrigger("nct.init", evt_handle);
    }
});