describe('Studentski centar u Osijeku page', () => {
    it('Open Izdavanje, pregled ugovora/pregled isplata i zarada page', async () => {
        await browser.url('http://www.stucos.unios.hr/?page_id=1297');
        await browser.setWindowSize(100, 100)
        await browser.pause (3000);

        
    })

    it('Open login page', async () => {
          await browser.url('https://login.aaiedu.hr/sso/module.php/core/loginuserpass.php?AuthState=_d98b2a9e934f9c8be1ac76e1ea67fae3aefe7bcdcc%3Ahttps%3A%2F%2Flogin.aaiedu.hr%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fwebsc.stucos.hr%252Fsimplesaml%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26RelayState%3Dhttps%253A%252F%252Fwebsc.stucos.hr%252Fsc%252F85%252Flogin%252Faai%26cookieTime%3D1642703388');

         const emailInput=await $('#username');
         await emailInput.addValue("Moj.fake@email.com");

         const passInput=await $('#password');
         await passInput.addValue("mojalozinka");

         const button=await $('.login-btn');
         await button.click();

         const error=await $(".error");
         await expect(error).toHaveText('Error: Incorrect username or password');
         await browser.pause (3000);
        

      })

      it('Open login page', async () => {
        await browser.url('https://login.aaiedu.hr/sso/module.php/core/loginuserpass.php?AuthState=_d98b2a9e934f9c8be1ac76e1ea67fae3aefe7bcdcc%3Ahttps%3A%2F%2Flogin.aaiedu.hr%2Fsso%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fwebsc.stucos.hr%252Fsimplesaml%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26RelayState%3Dhttps%253A%252F%252Fwebsc.stucos.hr%252Fsc%252F85%252Flogin%252Faai%26cookieTime%3D1642703388');
     
        const emailInput=await $('#username');
         await emailInput.addValue("akrvavica@ffos.hr");

         const passInput=await $('#password');
         await passInput.addValue("t9Fje54L");

         const button=await $('.login-btn');
         await button.click();

         const title=await $("#page-title");
         await expect(title).toHaveTitle('Dobro došli - studenti');
         await browser.pause (3000);

        })

})
// describe('Blablacar.hr homepage', () => {
    // it('Open Blablacar homepage', async () => {
       //  await browser.url('https://www.blablacar.hr/');



    
   //  })

   //  describe('Blablacar login page', () => {
       //  it('Open page', async () => {
           //  await browser.url('https://www.blablacar.hr/login/email');

            // const emailInput=await $('[type="email"]');
            // await emailInput.addValue("Moj.fake@email.com");
            // await browser.pause (3000);
    
            
            
       //  })
    // })

    
// })

//