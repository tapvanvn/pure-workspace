jscraft.require("template://nct_mod_container.js")

function jscraft_module_content() {

    var container = __pure__mod__.Class.extend("Container",{

        init:function(dom)
        {
           dom.innerHTML = "This is a container"
        }
    });

    window.nct.core.regType("container", container);

}