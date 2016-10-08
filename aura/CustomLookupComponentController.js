({
    doInit: function(component, event,helper)
    {
        var action = component.get("c.getAllContacts");
        action.setCallback(this, function(e){
            if(e.getState()==='SUCCESS')
            {
                debugger;
                var leftOption = component.find('leftOptions');
                leftOption.set("v.options",e.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    moveLeft:function(component,event,helper)
    {
        debugger;
        var leftComp = component.find('leftOptions');
        var rightComp = component.find('rightOptions');
        var rightOptions = rightComp.get('v.options');
        var rightValue = rightComp.get('v.value');
        if(!rightValue)return;
        var leftOptions = leftComp.get('v.options');
        if(!leftOptions)
            leftOptions=[];        
        
        var values = rightValue.split(';');
        for(var i=0;i<values.length;i++)
        {
            for(var j=0;j<rightOptions.length;j++)
            {
                if(values[i]===rightOptions[j].value)
                {
                    leftOptions.push({'label':rightOptions[j].label,
                                       'value':rightOptions[j].value});
                    rightOptions.splice(j,1);
                    break;
                }
            }
        } 
        rightComp.set('v.options',rightOptions);
        if(leftOptions.length>0)
        {
            leftComp.set('v.options',leftOptions);
        }
        
    },
    moveRight:function(component,event, helper)
    {
        debugger;
        var leftComp = component.find('leftOptions');
        var rightComp = component.find('rightOptions');
        var leftOptions = leftComp.get('v.options');
        var leftValue = leftComp.get('v.value');
        if(!leftValue)
            return;
        var rightOptions = rightComp.get('v.options');
        if(!rightOptions)
            rightOptions = [];
       	if(leftValue!='undefined'&& leftValue!='')
        {
            var values = leftValue.split(';');
			for(var i=0;i<values.length;i++)
            {
                for(var j=0;j<leftOptions.length;j++)
                {
                    if(values[i]===leftOptions[j].value)
                    {
                        rightOptions.push({'label':leftOptions[j].label,
                                           'value':leftOptions[j].value});
                        leftOptions.splice(j,1);
                        break;
                    }
                }
            } 
            leftComp.set('v.options',leftOptions);
        }
        if(rightOptions.length>0)
        {
            rightComp.set('v.options',rightOptions);
        }
        
        console.log('left Comp'+leftComp.get('v.options'));
        console.log('right Comp'+rightComp.get('v.options'));
        
    },
    search:function(component,event,helper)
    {
        helper.searchHelper(component);
    },
    save:function(component, event, helper)
    {
        var rightComp = component.find("rightOptions");
        var rightOptions = rightComp.get('v.options');
        var existingContact = component.find("existingContact");
        var first = true;
        var message ='';
        for(var i=0;i<rightOptions.length;i++){
            if(!first)
                message+=';';
            message +=rightOptions[i].label;
            first = false;
        }
        existingContact.set("v.value",message);
        helper.hidePopupHelper(component, 'searchModal', 'slds-fade-in-');
        helper.hidePopupHelper(component,'backdrop','slds-backdrop--');
    },
	showModal : function(component, event, helper) {
        
        helper.showPopupHelper(component, 'searchModal', 'slds-fade-in-');
        helper.showPopupHelper(component,'backdrop','slds-backdrop--');        
	},
    closeModal:function(component, event, helper)
    {
        helper.hidePopupHelper(component, 'searchModal', 'slds-fade-in-');
        helper.hidePopupHelper(component,'backdrop','slds-backdrop--'); 
    }
})