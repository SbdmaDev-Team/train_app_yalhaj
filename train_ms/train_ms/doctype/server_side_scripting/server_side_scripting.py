# Copyright (c) 2024, yalhaj and contributors
# For license information, please see license.txt
import frappe
from frappe.model.document import Document

class serversidescripting(Document):
	def validate(self):
		frappe.msgprint("Hello Frappe")
