jscraft.require("template://nct_mod_container.js")

function jscraft_module_content() {

    var container = __pure__mod__.Class.extend("Container",{

        init:function(dom, ctx)
        {
            this.dom = dom
            ctx.panel.innerHTML = "This is a panel"
            __pure__mod__.Pure.dom.bindStyle(ctx.panel, "hot")
        }
    });

    window.nct.core.regType("container", container);

}