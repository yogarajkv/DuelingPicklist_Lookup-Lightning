public with sharing class CustomLookupCompController {
 
     
    @AuraEnabled
    public static List<SelectOption> getAllContacts()
    {
       List<SelectOption> allContacts = new List<SelectOption>();
        List<Contact> contacts = [Select Id,Name from Contact limit 5];
        for(Contact c: contacts)
        {
            allContacts.add(new SelectOption(c.Id,c.Name));
        }
        return allContacts;
    }
    @AuraEnabled
    public static List<SelectOption> searchContact(String searchString)
    {
        List<SelectOption> allContacts = new List<SelectOption>();
        searchString ='%'+searchString+'%';
        List<Contact> contacts = [Select Id,Name from Contact where name like :searchString limit 5];
        for(Contact c: contacts)
        {
            allContacts.add(new SelectOption(c.Id,c.Name));
        }
        return allContacts;
    }
    @AuraEnabled
    public static void save()
    {
      /*  message ='Selected contacts';
        Boolean first =true;
        for(SelectOption so: selectedContacts)
        {
            if(!first){
                message+=',';
            }
            message+= so.getLabel()+'('+so.getValue()+')';
            first = false;
        }*/
    }
    
    public class SelectOption{
        public SelectOption (String value, String label)
        {
            this.value = value;
            this.label = label;
            this.disabled = false;
            this.escapeItem = false;
            this.selected = false;
        }
        public SelectOption(String value, String label, boolean isDisabled){
            this.value = value;
            this.label = label;
            this.disabled = isDisabled;
            this.escapeItem = false;
            this.selected = false;
        }
        @AuraEnabled
        public String label { get;set; }
        @AuraEnabled
        public String value { get;set; }
        @AuraEnabled
        public Boolean disabled { get;set; }
        @AuraEnabled
        public Boolean escapeItem { get;set; }
        @AuraEnabled
        public Boolean selected{get;set;}
        
    }
}