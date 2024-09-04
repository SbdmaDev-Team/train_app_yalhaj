// Copyright (c) 2024, yalhaj and contributors
// For license information, please see license.txt

frappe.ui.form.on('client side scripting', {
	//   refresh: function(frm) {
	// 	frappe.msgprint("Hello to Yousif Client side script")
	//   }
	//   before_cancel: function (frm) {
	// 	frappe.throw("Save before cancel")
	// }
	// validate:function(frm){
	// 	frm.set_value('full_name',frm.doc.first_name + " "+ frm.doc.middle_name)
	// }
	refresh: function (frm){
	frm.add_custom_button('Click Me Button_1', () => {
		frappe.msgprint(__('You Clicked Me ONE'));
	},'click me')
	frm.add_custom_button('Click Me Button_2', () => {
		frappe.msgprint(__('You Clicked Me TOW'));
	},'click me')
}
});
