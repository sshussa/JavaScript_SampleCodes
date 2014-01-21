
$(document).ready(function () {
	
			/* Display Functions */
			
			/* Display Function for Localities */
            $("#lolShowSimple").click(function (e)
            {
                ShowlolDialog(false);
                e.preventDefault();
            });
			
			$("#lolShowModal").click(function (e)
            {
                ShowlolDialog(true);
                e.preventDefault();
            });
			
			/* Display Function for Budget */
            $("#budgetShowSimple").click(function (e)
            {
                ShowbudgetDialog(false);
                e.preventDefault();
            });
			
			$("#budgetShowModal").click(function (e)
            {
                ShowbudgetDialog(true);
                e.preventDefault();
            });
			
			/* Display Function for Beds */
            $("#bedsShowSimple").click(function (e)
            {
                ShowbedsDialog(false);
                e.preventDefault();
            });
			
			$("#bedsShowModal").click(function (e)
            {
                ShowbedsDialog(true);
                e.preventDefault();
            });
			
			/* Display Function for Construction Age */
            
            $("#ageShowSimple").click(function (e)
            {
                ShowageDialog(false);
                e.preventDefault();
            });
			
			$("#ageShowModal").click(function (e)
            {
                ShowageDialog(true);
                e.preventDefault();
            });
			
			/* Display Function for Contact Details */
            
            $("#contactShowSimple").click(function (e)
            {
                ShowcontactDialog(false);
                e.preventDefault();
            });
			
			$("#contactShowModal").click(function (e)
            {
                ShowcontactDialog(true);
                e.preventDefault();
            });
			
			/* Display Function for Property Types */
            $("#proptypShowSimple").click(function (e)
            {
                ShowproptypDialog(false);
                e.preventDefault();
            });
			
			$("#proptypShowModal").click(function (e)
            {
                ShowproptypDialog(true);
                e.preventDefault();
            });
			
			
			 
			/* Close Functions */
			 
			/* Close Function for Localities */
			$("#lolClose").click(function (e)
            {
                HidelolDialog();
                e.preventDefault();
            });
			
			/* Close Function for Budget */
			$("#budgetClose").click(function (e)
            {
                HidebudgetDialog();
                e.preventDefault();
            });
			
			/* Close Function for Beds */
			$("#bedsClose").click(function (e)
            {
                HidebedsDialog();
                e.preventDefault();
            });
			
			/* Close Function for Construction Age */
			$("#ageClose").click(function (e)
            {
                HideageDialog();
                e.preventDefault();
            });
			
			/* Close Function for Contact Details */
			$("#contactClose").click(function (e)
            {
                HidecontactDialog();
                e.preventDefault();
            });
			
			/* Close Function for Property Types */
			$("#proptypClose").click(function (e)
            {
                HideproptypDialog();
                e.preventDefault();
            });
			
			

			
			/* Submit Functions */
			
			/* Submit Function for Locality */
			$("#lolSubmit").click(function (e)
            {
                //var brand = $("#brands input:radio:checked").val();
                
                var lols = '';
                var count = 0;
                $('#lol input:checked').each(function(){
                    if (count > 0) {  
                        lols += ', '+$(this).val();
                    }else {
                        lols += $(this).val();
                    }
                    console.log(lols+' '+count);
                    count++;
                });
                
                $("#output").val(lols);
                HidelolDialog();
                e.preventDefault();
            });
			
			/* Submit Function for Budget */
			
			$("#budgetSubmit").click(function (e)
            {
                //var brand = $("#brands input:radio:checked").val();
                
                var budgets = '';
                var count = 0;
                $('#budget input:checked').each(function(){
                    if (count > 0) {  
                        budgets += ', '+$(this).val();
                    }else {
                        budgets += $(this).val();
                    }
                    console.log(budgets+' '+count);
                    count++;
                });
                
                $("#ufygjh").val(budgets);
                HidebudgetDialog();
                e.preventDefault();
            });
			
			/* Submit Function for Beds */
			
			$("#bedsSubmit").click(function (e)
            {
                //var brand = $("#brands input:radio:checked").val();
                
                var bedss = '';
                var count = 0;
                $('#beds input:checked').each(function(){
                    if (count > 0) {  
                        bedss += ', '+$(this).val();
                    }else {
                        bedss += $(this).val();
                    }
                    console.log(bedss+' '+count);
                    count++;
                });
                
                $("#fghfg").val(bedss);
                HidebedsDialog();
                e.preventDefault();
            });
			
			/* Submit Function for Construction Age */
			
			$("#ageSubmit").click(function (e)
            {
                //var brand = $("#brands input:radio:checked").val();
                
                var ages = '';
                var count = 0;
                $('#age input:checked').each(function(){
                    if (count > 0) {  
                        ages += ', '+$(this).val();
                    }else {
                        ages += $(this).val();
                    }
                    console.log(ages+' '+count);
                    count++;
                });
                
                $("#ghj").val(ages);
                HideageDialog();
                e.preventDefault();
            });
			
			/* Submit Function for Property Types */
			
			$("#proptypSubmit").click(function (e)
            {
                //var brand = $("#brands input:radio:checked").val();
                
                var proptyps = '';
                var count = 0;
                $('#proptyp input:checked').each(function(){
                    if (count > 0) {  
                        proptyps += ', '+$(this).val();
                    }else {
                        proptyps += $(this).val();
                    }
                    console.log(proptyps+' '+count);
                    count++;
                });
                
                $("#dfhfe").val(proptyps);
                HideproptypDialog();
                e.preventDefault();
            });
			
        });
		
		/* Show Functions */

		/* Localities Show Functions */
		
		function ShowlolDialog(modal)
        {
            $("#loloverlay").show();
            $("#loldialog").fadeIn(300);

            if (modal)
            {
                $("#loloverlay").unbind("click");
            }
            else
            {
                $("#loloverlay").click(function (e)
                {
                    HidelolDialog();
                });
            }
        }
		
		/* Budget Show Functions  */
		
		function ShowbudgetDialog(modal)
        {
            $("#budgetoverlay").show();
            $("#budgetdialog").fadeIn(300);

            if (modal)
            {
                $("#budgetoverlay").unbind("click");
            }
            else
            {
                $("#budgetoverlay").click(function (e)
                {
                    HidebudgetDialog();
                });
            }
        }
		
		/* Beds Show Functions  */
		
		function ShowbedsDialog(modal)
        {
            $("#bedsoverlay").show();
            $("#bedsdialog").fadeIn(300);

            if (modal)
            {
                $("#bedsoverlay").unbind("click");
            }
            else
            {
                $("#bedsoverlay").click(function (e)
                {
                    HidebedsDialog();
                });
            }
        }
		
		/* Construction Age Show Functions  */
		
		function ShowageDialog(modal)
        {
            $("#ageoverlay").show();
            $("#agedialog").fadeIn(300);

            if (modal)
            {
                $("#ageoverlay").unbind("click");
            }
            else
            {
                $("#ageoverlay").click(function (e)
                {
                    HideageDialog();
                });
            }
        }
		
		/* Contact Details Show Functions */
		
		function ShowcontactDialog(modal)
        {
            $("#contactoverlay").show();
            $("#contactdialog").fadeIn(300);

            if (modal)
            {
                $("#contactoverlay").unbind("click");
            }
            else
            {
                $("#contactoverlay").click(function (e)
                {
                    HidecontactDialog();
                });
            }
        }
		
		/* Property Types Show Functions */
		
		function ShowproptypDialog(modal)
        {
            $("#proptypoverlay").show();
            $("#proptypdialog").fadeIn(300);

            if (modal)
            {
                $("#proptypoverlay").unbind("click");
            }
            else
            {
                $("#proptypoverlay").click(function (e)
                {
                    HideproptypDialog();
                });
            }
        }

		

		
		/* Hide Functions */
		
		/* Localities Hide Functions */
		
        function HidelolDialog()
        {
            $("#loloverlay").hide();
            $("#loldialog").fadeOut(300);
        } 
		
		/* Budget Hide Functions */
		
        function HidebudgetDialog()
        {
            $("#budgetoverlay").hide();
            $("#budgetdialog").fadeOut(300);
        } 
		
		/* Beds Hide Functions */
		
        function HidebedsDialog()
        {
            $("#bedsoverlay").hide();
            $("#bedsdialog").fadeOut(300);
        } 
		
		/* Construction Age Hide Functions */
		
        function HideageDialog()
        {
            $("#ageoverlay").hide();
            $("#agedialog").fadeOut(300);
        } 
		
		/* Contact Details Hide Functions */
		
        function HidecontactDialog()
        {
            $("#contactoverlay").hide();
            $("#contactdialog").fadeOut(300);
        } 
		
		/* Property Types Hide Functions */
		
        function HideproptypDialog()
        {
            $("#proptypoverlay").hide();
            $("#proptypdialog").fadeOut(300);
        } 
		
		