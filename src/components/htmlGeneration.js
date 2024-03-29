import React from 'react';

export const generateHtmlContent = (formData) => {
    // Construct your HTML string using formData, ensuring to inject dynamic values safely
    // This is a simplified example. You need to replace placeholders accordingly.
    return `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            @import url("https://use.typekit.net/xjg8kwa.css");
    
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
        </style>
    </head>
    
    <body style="margin: 0; background-color: ${formData.backgroundColor}; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;margin-top: 1.5em">
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; max-width: 640px;" align="center" valign="middle">
            <tbody>
                <tr>
                    <td>
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #fff; color: #000; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                    <td width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-bottom: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-right:10px;padding-top:5px;">
                                                                    <div style="color:#101112;direction:ltr;font-family:'bebas-neue', ${formData.fontFamily};font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:right;mso-line-height-alt:14.399999999999999px;">
                                                                        <p style="margin: 0;font-size:12px; font-family:${formData.fontFamily};">Having trouble viewing this email?&nbsp;</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" style="padding-right:10px;padding-top:5px;">
                                                                    <div style="color:#101112;direction:ltr;font-family: 'bebas-neue', ${formData.fontFamily};font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:right;mso-line-height-alt:14.399999999999999px;">
                                                                        <p style="margin: 0;font-size:12px;font-family:${formData.fontFamily};">View <a href="{{Email URL}}" style="color:${formData.primaryColor};font-size:12px;text-decoration: underline;font-family:${formData.fontFamily};">webpage</a> version.</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: ${formData.primaryColor}; width: 640px; margin: 0 auto;" width="640">
                                            <tbody>
                                                <tr>
                                                    <td width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 0px; padding-top: 0px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad">
                                                                    <div class="alignment" align="center" style="line-height:10px">
                                                                        <div style="max-width: 640px;"><img src="${formData.headerImage}" style="display: block; height: auto; border: 0; width: 640px;" width="640"></div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; border-bottom: 0 solid #fff; border-left: 0 solid #fff; border-right: 0px solid #fff; border-top: 0 solid #fff; color: #000; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                    <td width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 15px; padding-top: 35px; vertical-align: top; border-top: 0px; border-bottom: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td align="left" class="pad" style="width:100%;padding-right:25px;padding-left:25px;padding-top:5px">
                                                                    <div align="left" style="line-height:10px">
                                                                        <p style="font-weight: bold; font-size: 30px; text-align: left;line-height:32px; font-family: ${formData.fontFamily}; margin: 0; color: ${formData.primaryColor}">
                                                                            {{Sender Nickname}} just sent you an <span style="color:${formData.secondaryColor};font-family: ${formData.fontFamily};font-size: 30px;line-height:32px;font-weight: bold;">${formData.giftCardNickname}</span>
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:100%;padding-right:25px;padding-left:25px;padding-top:5px">
                                                                    <div align="center" style="line-height:10px">
                                                                    <p style="text-align: left;line-height:18px; font-family: ${formData.fontFamily}; color:${formData.primaryColor};">To view your ${formData.giftCardNickname} and the value, please the <a href="${formData.secureURLAndKey}" style="color:${formData.accentColor}; font-weight: bold; font-family: ${formData.fontFamily} ">Print Your ${formData.giftCardNickname} Now</a> button and follow the instructions to print and redeem.</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table width="640" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: ${formData.primaryColor}; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                    <td class="column-1" width="17%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 20px; padding-left: 30px; padding-right: 0px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: keep-all">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;font-family:${formData.fontFamily};font-size:16px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily}; color:${formData.accentColor}; font-weight:bold;font-size:22px;letter-spacing:1px">TO:</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: keep-all">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;font-family:${formData.fontFamily};font-size:16px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily}; color:${formData.accentColor}; font-weight:bold;font-size:22px;letter-spacing:1px">FROM:</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: keep-all">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;font-family:${formData.fontFamily};font-size:16px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily}; color:${formData.accentColor}; ;font-weight:bold;font-size:22px;letter-spacing:1px">VALUE:</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column-2" width="43%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-right: 15px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily};color:${formData.primaryColor};font-size:16px;letter-spacing:1px">&nbsp;{{Customer Nickname}}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily};color:${formData.primaryColor};font-size:16px;letter-spacing:1px">&nbsp;{{Sender Nickname}}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                            <tr>
                                                                <td class="pad" height="39" style="padding-bottom:5px;padding-top:5px;">
                                                                    <div style="direction:ltr;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily};color:${formData.primaryColor};font-size:16px;letter-spacing:1px">&nbsp;{{Gift Value}}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column-3" width="40%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-right: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-bottom: 0px; border-left: 0px;">
                                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="width:40%;padding-right:0px;padding-left:0px;">
                                                                    <div align="center" style="width: 100%">
                                                                        <div align="center" style="width: 100%">
                                                                            <img style="width: 260px;" src="${formData.specialImage}"/>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; border-bottom: 0 solid #fff; border-left: 0 solid #fff; border-right: 0px solid #fff; border-top: 0 solid #fff; color: #000; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                    <td align="right" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; background-color: #ffffff; padding-left: 30px; padding-right: 30px ;padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" align="right" style="padding-left:0px;padding-right:35px">
                                                                    <div style="line-height:10px;display:inline-block;width:182px">
                                                                        <a href="{{Secure URL and Key}}">
                                                                            <button style="background: ${formData.buttonColor};color: #000000;padding:.5rem 1rem;border-radius:16px;border: none;width: 260px; position: relative;right:42px;">${formData.buttonText}</button>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table align="center" width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table  align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; border-bottom: 0 solid #fff; border-left: 0 solid #fff; border-right: 0px solid #fff; border-top: 0 solid #fff; color: #000; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                    <td style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-left: 30px; padding-right: 30px ;padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-bottom: 0px;">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                            <tr>
                                                                <td class="pad" style="padding-top:10px;">
                                                                    <div style="color:#101112;direction:ltr;font-family:${formData.fontFamily};font-size:14px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
                                                                        <p style="margin: 0;font-family:${formData.fontFamily}; color:${formData.accentColor}; font-size:22px; font-weight:bold;letter-spacing:1px">MESSAGE:</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;word-wrap: break-word;word-break:break-all ">
                                                            <tr>
                                                                <td class="pad" style="padding-bottom:25px;padding-top:10px;word-wrap: break-word;word-break:break-all ">
                                                                    <div style="color:#101112;direction:ltr;font-family: ${formData.fontFamily};font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
                                                                        <p style="margin: 0;text-align: left;word-wrap: break-word; word-break:break-all; font-family:'arvo', Helvetica, Arial,sans-serif ">{{Customer Text}}</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color:#DB2B36; min-width:640px; max-width:640px; margin: 0 auto">
	<tbody>
		<tr>
			<td>
				<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
					role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
					<tbody>
						<tr>
							<td>
								<table align="center" border="0" cellpadding="0"
									cellspacing="0" role="presentation"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: ${formData.accentColor}; color: #000000; width: 640px;"
									width="640">
									<tbody>
										<tr>
											<td width="100%"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
												<table width="100%" border="0"
													cellpadding="0" cellspacing="0" role="presentation"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
													<tr>
														<td class="pad" style="padding-top:5px;">
															<div
																style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
																<p style="margin: 0;font-size: 12px">Questions or Comments? Click <a href="#" style="text-decoration:underline;color:#ffffff" target="_blank">Here</a></p>
															</div>
														</td>
													</tr>
												</table>
												<table width="100%" border="0"
													cellpadding="0" cellspacing="0" role="presentation"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
													<tr>
														<td class="pad" style="padding-top:10px; padding-bottom: 5px">
															<div
																style="color:#ffffff;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
																<p style="margin: 0;">&copy;{{Date Year}} ${formData.merchantName}.</p>
															</div>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table><!-- End -->
                    </td>
                </tr>
            </tbody>
        </table><!-- End -->
    </body>
    
    </html>`;
  };
  
  export const downloadHtmlFile = (htmlContent, fileName) => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  