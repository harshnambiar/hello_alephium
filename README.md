# Counter Ralph
Your first smart contract in the Ralph language for Alephium

# Steps from Scratch  
1. create a blank folder and create the contracts folder inside it  
2. create a hello.ral file inside contracts and copy the contents as shown in the repository here  
3. do the npm installations after copying the package.json  
4. have a .env file in the root folder with PK=YOUR_PRIVATE_KEY for your alephium wallet address  
5. copy the alephium.config.ts  
6. copy the tsconfig as shown  
7. run the devnet locally  
8. compile the contract with npx @alephium/cli@latest compile  
9. if it worked, there should be a resulting artifacts folder inside the root folder  
10. create the test folder and copy its contents as shown in the repository  
11. test the contract with npx @alephium/cli@latest test  
12. if everything works out fine, create the scripts folder and paste the contents as shown in the repository  
13. deploy to the devnet with npx @alephium/cli@latest deploy  
14. alternately, deploy to the testnet with npx @alephium/cli@latest deploy --network=testnet  
15. a successful deployment should create a deployments folder with a .deployments.testnet.json or a .deployments.devnet.json file depending on your chosen option  
16. create an src folder and paste the contents as shown in the repository  
17. make sure the accounts group id is the same in the previous step as is in the file created in Step 15  
18. do an npx tsc --build in the root folder  
19. if everything worked correctly, a dist folder is generated  
20. do a node dist/src/hello.js  
21. if it worked, the console should print "au revoir" at the end of the execution flow  
22. uncomment out the increment_counter() at the end of src/hello.ts and comment out the display_counter()  
23. do an npx tsc --build again, and then do a node dist/src/hello.js  
24. if all goes well, the console should print "au revoir 2"  
25. repeat the exercise by uncommenting out the reset_counter() function and commenting out the display_counter() function  
26. build again and run node dist/src/hello.js again  
27. it should print "au revoir 3" in the console if everything worked perfectly
28. in the contracts folder, create the files for incrementCounter and resetCounter and copy the contents as shown
29. run the compile command again
30. run the npx tsc --build command again
31. if all goes well, in the dist folder, there should be an artifacts folder
32. create the [hello_alephium_frontend](https://github.com/harshnambiar/hello_alephium_frontend) repository separately as shown
33. in its src folder, copy paste the artifacts folder that was obtained in step 31
34. the next steps are in the hello_alephium_frontend repository to help you connect your alephium code to the frontend
 

 
