({
	showPopupHelper:function(component,componentId, className)
    {
        var modal = component.find(componentId);
        $A.util.removeClass(modal,className+'hide');
        $A.util.addClass(modal,className+'open');
    },
    hidePopupHelper:function(component,componentId, className)
    {
        var modal = component.find(componentId);
        $A.util.removeClass(modal,className+'open');
        $A.util.addClass(modal,className+'hide');
    },
    searchHelper:function(component)
    {
        var action = component.get("c.searchContact");
        var searchComp = component.find('searchText');
        action.setParams({
            "searchString":searchComp.get('v.value')?searchComp.get('v.value'):''
        });
        action.setCallback(this, function(e){
            if(e.getState()==='SUCCESS')
            {
                debugger;
                var existingContactComp = component.find('existingContact');
                var existingContact = existingContactComp.get('v.value');
                var leftOptions = e.getReturnValue();
                if(existingContact)
                {
                    var existing = existingContact.split(';');
                    for(var i=0;i<existing.length;i++){
                        for(var j=0;j<leftOptions.length;j++)
                        {
                            if(existing[i]===leftOptions[j].label){
                                leftOptions.splice(j,1);
                                break;
                            }
                        }
                    }
                }
                var leftOption = component.find('leftOptions');
                leftOption.set("v.options",leftOptions);
            }
        });
        $A.enqueueAction(action);
    }
})