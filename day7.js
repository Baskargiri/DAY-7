//1.a  Get all the countries from the Asia continent /region using the Filter function

// let countries= new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all");
// countries.send();
// countries.onload=function(){
// let data=countries.response;
// let result=JSON.parse(data);
// var b=result.filter((ele)=>(ele.region==="Asia"));
// var c=b.map((ele)=>console.log(ele.name.common))
// }
// output:
// day7.js:10 Maldives
// day7.js:10 Pakistan
// day7.js:10 Malaysia
// day7.js:10 Uzbekistan
// day7.js:10 Singapore
// day7.js:10 Qatar
// day7.js:10 Kazakhstan
// day7.js:10 Bahrain
// day7.js:10 India
// day7.js:10 Macau
// day7.js:10 Syria
// day7.js:10 Kyrgyzstan
// day7.js:10 Palestine
// day7.js:10 Timor-Leste
// day7.js:10 Taiwan
// day7.js:10 South Korea
// day7.js:10 Iraq
// day7.js:10 Cambodia
// day7.js:10 Sri Lanka
// day7.js:10 Israel
// day7.js:10 Tajikistan
// day7.js:10 Azerbaijan
// day7.js:10 Georgia
// day7.js:10 China
// day7.js:10 Thailand
// day7.js:10 Indonesia
// day7.js:10 Turkmenistan
// day7.js:10 Turkey
// day7.js:10 Iran
// day7.js:10 Lebanon
// day7.js:10 Philippines
// day7.js:10 Kuwait
// day7.js:10 Oman
// day7.js:10 Afghanistan
// day7.js:10 Armenia
// day7.js:10 Bangladesh
// day7.js:10 Laos
// day7.js:10 Nepal
// day7.js:10 Myanmar
// day7.js:10 United Arab Emirates
// day7.js:10 Bhutan
// day7.js:10 Jordan
// day7.js:10 Vietnam
// day7.js:10 Brunei
// day7.js:10 Japan
// day7.js:10 Hong Kong
// day7.js:10 Saudi Arabia
// day7.js:10 North Korea
// day7.js:10 Mongolia
// day7.js:10 Yemen




//----------------------------------
// 1.b  Get all the countries with a population of less than 2 lakhs using Filter function

// var countries =new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all");
// countries.send();
// countries.onload=function(){
// let result=countries.response;
// let data=JSON.parse(result);
// var res = data.filter((ele)=>ele.population<200000);
// var res1 = res.map((ele)=>console.log(ele.name.common))
// }

//output:

// day7.js:25 Aruba
// day7.js:25 Wallis and Futuna
// day7.js:25 Åland Islands
// day7.js:25 Pitcairn Islands
// day7.js:25 Seychelles
// day7.js:25 French Southern and Antarctic Lands
// day7.js:25 Christmas Island
// day7.js:25 Saint Martin
// day7.js:25 Heard Island and McDonald Islands
// day7.js:25 Antarctica
// day7.js:25 Greenland
// day7.js:25 British Indian Ocean Territory
// day7.js:25 Saint Lucia
// day7.js:25 Niue
// day7.js:25 Saint Barthélemy
// day7.js:25 Grenada
// day7.js:25 Isle of Man
// day7.js:25 Curaçao
// day7.js:25 Dominica
// day7.js:25 Faroe Islands
// day7.js:25 Montserrat
// day7.js:25 Cook Islands
// day7.js:25 Bermuda
// day7.js:25 San Marino
// day7.js:25 Cayman Islands
// day7.js:25 Cocos (Keeling) Islands
// day7.js:25 United States Virgin Islands
// day7.js:25 Norfolk Island
// day7.js:25 Nauru
// day7.js:25 Bouvet Island
// day7.js:25 Micronesia
// day7.js:25 American Samoa
// day7.js:25 Anguilla
// day7.js:25 Marshall Islands
// day7.js:25 Kiribati
// day7.js:25 Northern Mariana Islands
// day7.js:25 Guam
// day7.js:25 Gibraltar
// day7.js:25 Vatican City
// day7.js:25 Jersey
// day7.js:25 Tuvalu
// day7.js:25 Saint Helena, Ascension and Tristan da Cunha
// day7.js:25 Samoa
// day7.js:25 Guernsey
// day7.js:25 Tonga
// day7.js:25 Saint Kitts and Nevis
// day7.js:25 Falkland Islands
// day7.js:25 Palau
// day7.js:25 Turks and Caicos Islands
// day7.js:25 British Virgin Islands
// day7.js:25 Liechtenstein
// day7.js:25 Andorra
// day7.js:25 Tokelau
// day7.js:25 Sint Maarten
// day7.js:25 United States Minor Outlying Islands
// day7.js:25 Antigua and Barbuda
// day7.js:25 Saint Pierre and Miquelon
// day7.js:25 Saint Vincent and the Grenadines
// day7.js:25 South Georgia
// day7.js:25 Caribbean Netherlands
// day7.js:25 Monaco

// 1.cPrint the following details name, capital, flag using forEach function


// var countries=new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all");
// countries.send();
// countries.onload=function(){
//     var res=countries.response;
//     var data=JSON.parse(res);
//     var res1=data.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flags.png}`)})

// }

//output


// day7.js:101 Mauritania Nouakchott https://flagcdn.com/w320/mr.png
// day7.js:101 Aruba Oranjestad https://flagcdn.com/w320/aw.png
// day7.js:101 Argentina Buenos Aires https://flagcdn.com/w320/ar.png
// day7.js:101 Sweden Stockholm https://flagcdn.com/w320/se.png
// day7.js:101 Maldives Malé https://flagcdn.com/w320/mv.png
// day7.js:101 Mexico Mexico City https://flagcdn.com/w320/mx.png
// day7.js:101 New Zealand Wellington https://flagcdn.com/w320/nz.png
// day7.js:101 Ecuador Quito https://flagcdn.com/w320/ec.png
// day7.js:101 Wallis and Futuna Mata-Utu https://flagcdn.com/w320/wf.png
// day7.js:101 Åland Islands Mariehamn https://flagcdn.com/w320/ax.png
// day7.js:101 Montenegro Podgorica https://flagcdn.com/w320/me.png
// day7.js:101 Pakistan Islamabad https://flagcdn.com/w320/pk.png
// day7.js:101 Pitcairn Islands Adamstown https://flagcdn.com/w320/pn.png
// day7.js:101 Zambia Lusaka https://flagcdn.com/w320/zm.png
// day7.js:101 Seychelles Victoria https://flagcdn.com/w320/sc.png
// day7.js:101 Malaysia Kuala Lumpur https://flagcdn.com/w320/my.png
// day7.js:101 Norway Oslo https://flagcdn.com/w320/no.png
// day7.js:101 Uzbekistan Tashkent https://flagcdn.com/w320/uz.png
// day7.js:101 Vanuatu Port Vila https://flagcdn.com/w320/vu.png
// day7.js:101 French Southern and Antarctic Lands Port-aux-Français https://flagcdn.com/w320/tf.png
// day7.js:101 Christmas Island Flying Fish Cove https://flagcdn.com/w320/cx.png
// day7.js:101 Singapore Singapore https://flagcdn.com/w320/sg.png
// day7.js:101 Suriname Paramaribo https://flagcdn.com/w320/sr.png
// day7.js:101 Western Sahara El Aaiún https://flagcdn.com/w320/eh.png
// day7.js:101 Saint Martin Marigot https://flagcdn.com/w320/mf.png
// day7.js:101 Costa Rica San José https://flagcdn.com/w320/cr.png
// day7.js:101 Heard Island and McDonald Islands undefined https://flagcdn.com/w320/hm.png
// day7.js:101 Ireland Dublin https://flagcdn.com/w320/ie.png
// day7.js:101 Antarctica undefined https://flagcdn.com/w320/aq.png
// day7.js:101 Australia Canberra https://flagcdn.com/w320/au.png
// day7.js:101 Libya Tripoli https://flagcdn.com/w320/ly.png
// day7.js:101 Qatar Doha https://flagcdn.com/w320/qa.png
// day7.js:101 Greenland Nuuk https://flagcdn.com/w320/gl.png
// day7.js:101 Mauritius Port Louis https://flagcdn.com/w320/mu.png
// day7.js:101 Kazakhstan Nur-Sultan https://flagcdn.com/w320/kz.png
// day7.js:101 British Indian Ocean Territory Diego Garcia https://flagcdn.com/w320/io.png
// day7.js:101 Albania Tirana https://flagcdn.com/w320/al.png
// day7.js:101 Bahrain Manama https://flagcdn.com/w320/bh.png
// day7.js:101 Papua New Guinea Port Moresby https://flagcdn.com/w320/pg.png
// day7.js:101 Burundi Gitega https://flagcdn.com/w320/bi.png
// day7.js:101 India New Delhi https://flagcdn.com/w320/in.png
// day7.js:101 Uruguay Montevideo https://flagcdn.com/w320/uy.png
// day7.js:101 Saint Lucia Castries https://flagcdn.com/w320/lc.png
// day7.js:101 Barbados Bridgetown https://flagcdn.com/w320/bb.png
// day7.js:101 New Caledonia Nouméa https://flagcdn.com/w320/nc.png
// day7.js:101 Latvia Riga https://flagcdn.com/w320/lv.png
// day7.js:101 Estonia Tallinn https://flagcdn.com/w320/ee.png
// day7.js:101 Niue Alofi https://flagcdn.com/w320/nu.png
// day7.js:101 Saint Barthélemy Gustavia https://flagcdn.com/w320/bl.png
// day7.js:101 Puerto Rico San Juan https://flagcdn.com/w320/pr.png
// day7.js:101 Grenada St. George's https://flagcdn.com/w320/gd.png
// day7.js:101 Macau undefined https://flagcdn.com/w320/mo.png
// day7.js:101 Cyprus Nicosia https://flagcdn.com/w320/cy.png
// day7.js:101 Isle of Man Douglas https://flagcdn.com/w320/im.png
// day7.js:101 Greece Athens https://flagcdn.com/w320/gr.png
// day7.js:101 Syria Damascus https://flagcdn.com/w320/sy.png
// day7.js:101 Lithuania Vilnius https://flagcdn.com/w320/lt.png
// day7.js:101 Curaçao Willemstad https://flagcdn.com/w320/cw.png
// day7.js:101 Dominica Roseau https://flagcdn.com/w320/dm.png
// day7.js:101 Niger Niamey https://flagcdn.com/w320/ne.png
// day7.js:101 Kyrgyzstan Bishkek https://flagcdn.com/w320/kg.png
// day7.js:101 Trinidad and Tobago Port of Spain https://flagcdn.com/w320/tt.png
// day7.js:101 Togo Lomé https://flagcdn.com/w320/tg.png
// day7.js:101 Palestine Ramallah,Jerusalem https://flagcdn.com/w320/ps.png
// day7.js:101 Madagascar Antananarivo https://flagcdn.com/w320/mg.png
// day7.js:101 Croatia Zagreb https://flagcdn.com/w320/hr.png
// day7.js:101 Faroe Islands Tórshavn https://flagcdn.com/w320/fo.png
// day7.js:101 Haiti Port-au-Prince https://flagcdn.com/w320/ht.png
// day7.js:101 Montserrat Plymouth https://flagcdn.com/w320/ms.png
// day7.js:101 Cook Islands Avarua https://flagcdn.com/w320/ck.png
// day7.js:101 Timor-Leste Dili https://flagcdn.com/w320/tl.png
// day7.js:101 Martinique Fort-de-France https://flagcdn.com/w320/mq.png
// day7.js:101 Cuba Havana https://flagcdn.com/w320/cu.png
// day7.js:101 Taiwan Taipei https://flagcdn.com/w320/tw.png
// day7.js:101 Eswatini Mbabane https://flagcdn.com/w320/sz.png
// day7.js:101 Ukraine Kyiv https://flagcdn.com/w320/ua.png
// day7.js:101 Bermuda Hamilton https://flagcdn.com/w320/bm.png
// day7.js:101 South Korea Seoul https://flagcdn.com/w320/kr.png
// day7.js:101 Peru Lima https://flagcdn.com/w320/pe.png
// day7.js:101 Iraq Baghdad https://flagcdn.com/w320/iq.png
// day7.js:101 Moldova Chișinău https://flagcdn.com/w320/md.png
// day7.js:101 San Marino City of San Marino https://flagcdn.com/w320/sm.png
// day7.js:101 Venezuela Caracas https://flagcdn.com/w320/ve.png
// day7.js:101 Guyana Georgetown https://flagcdn.com/w320/gy.png
// day7.js:101 Cayman Islands George Town https://flagcdn.com/w320/ky.png
// day7.js:101 Cambodia Phnom Penh https://flagcdn.com/w320/kh.png
// day7.js:101 Cocos (Keeling) Islands West Island https://flagcdn.com/w320/cc.png
// day7.js:101 Malta Valletta https://flagcdn.com/w320/mt.png
// day7.js:101 Sri Lanka Sri Jayawardenepura Kotte https://flagcdn.com/w320/lk.png
// day7.js:101 Israel Jerusalem https://flagcdn.com/w320/il.png
// day7.js:101 Sudan Khartoum https://flagcdn.com/w320/sd.png
// day7.js:101 United States Virgin Islands Charlotte Amalie https://flagcdn.com/w320/vi.png
// day7.js:101 Eritrea Asmara https://flagcdn.com/w320/er.png
// day7.js:101 Mali Bamako https://flagcdn.com/w320/ml.png
// day7.js:101 Somalia Mogadishu https://flagcdn.com/w320/so.png
// day7.js:101 Norfolk Island Kingston https://flagcdn.com/w320/nf.png
// day7.js:101 Comoros Moroni https://flagcdn.com/w320/km.png
// day7.js:101 Nicaragua Managua https://flagcdn.com/w320/ni.png
// day7.js:101 Russia Moscow https://flagcdn.com/w320/ru.png
// day7.js:101 Uganda Kampala https://flagcdn.com/w320/ug.png
// day7.js:101 Nauru Yaren https://flagcdn.com/w320/nr.png
// day7.js:101 Switzerland Bern https://flagcdn.com/w320/ch.png
// day7.js:101 Portugal Lisbon https://flagcdn.com/w320/pt.png
// day7.js:101 Tajikistan Dushanbe https://flagcdn.com/w320/tj.png
// day7.js:101 South Sudan Juba https://flagcdn.com/w320/ss.png
// day7.js:101 Bouvet Island undefined https://flagcdn.com/w320/bv.png
// day7.js:101 Micronesia Palikir https://flagcdn.com/w320/fm.png
// day7.js:101 American Samoa Pago Pago https://flagcdn.com/w320/as.png
// day7.js:101 Czechia Prague https://flagcdn.com/w320/cz.png
// day7.js:101 Botswana Gaborone https://flagcdn.com/w320/bw.png
// day7.js:101 Tunisia Tunis https://flagcdn.com/w320/tn.png
// day7.js:101 Anguilla The Valley https://flagcdn.com/w320/ai.png
// day7.js:101 Guinea-Bissau Bissau https://flagcdn.com/w320/gw.png
// day7.js:101 Slovakia Bratislava https://flagcdn.com/w320/sk.png
// day7.js:101 Marshall Islands Majuro https://flagcdn.com/w320/mh.png
// day7.js:101 Algeria Algiers https://flagcdn.com/w320/dz.png
// day7.js:101 Jamaica Kingston https://flagcdn.com/w320/jm.png
// day7.js:101 Mozambique Maputo https://flagcdn.com/w320/mz.png
// day7.js:101 Spain Madrid https://flagcdn.com/w320/es.png
// day7.js:101 Honduras Tegucigalpa https://flagcdn.com/w320/hn.png
// day7.js:101 Netherlands Amsterdam https://flagcdn.com/w320/nl.png
// day7.js:101 South Africa Pretoria,Bloemfontein,Cape Town https://flagcdn.com/w320/za.png
// day7.js:101 Azerbaijan Baku https://flagcdn.com/w320/az.png
// day7.js:101 North Macedonia Skopje https://flagcdn.com/w320/mk.png
// day7.js:101 Gambia Banjul https://flagcdn.com/w320/gm.png
// day7.js:101 Liberia Monrovia https://flagcdn.com/w320/lr.png
// day7.js:101 Luxembourg Luxembourg https://flagcdn.com/w320/lu.png
// day7.js:101 Cape Verde Praia https://flagcdn.com/w320/cv.png
// day7.js:101 Bahamas Nassau https://flagcdn.com/w320/bs.png
// day7.js:101 Georgia Tbilisi https://flagcdn.com/w320/ge.png
// day7.js:101 Kiribati South Tarawa https://flagcdn.com/w320/ki.png
// day7.js:101 Tanzania Dodoma https://flagcdn.com/w320/tz.png
// day7.js:101 China Beijing https://flagcdn.com/w320/cn.png
// day7.js:101 Guatemala Guatemala City https://flagcdn.com/w320/gt.png
// day7.js:101 São Tomé and Príncipe São Tomé https://flagcdn.com/w320/st.png
// day7.js:101 Germany Berlin https://flagcdn.com/w320/de.png
// day7.js:101 Sierra Leone Freetown https://flagcdn.com/w320/sl.png
// day7.js:101 Chad N'Djamena https://flagcdn.com/w320/td.png
// day7.js:101 United Kingdom London https://flagcdn.com/w320/gb.png
// day7.js:101 Slovenia Ljubljana https://flagcdn.com/w320/si.png
// day7.js:101 Thailand Bangkok https://flagcdn.com/w320/th.png
// day7.js:101 Indonesia Jakarta https://flagcdn.com/w320/id.png
// day7.js:101 Northern Mariana Islands Saipan https://flagcdn.com/w320/mp.png
// day7.js:101 Guam Hagåtña https://flagcdn.com/w320/gu.png
// day7.js:101 Finland Helsinki https://flagcdn.com/w320/fi.png
// day7.js:101 Mayotte Mamoudzou https://flagcdn.com/w320/yt.png
// day7.js:101 Gibraltar Gibraltar https://flagcdn.com/w320/gi.png
// day7.js:101 Turkmenistan Ashgabat https://flagcdn.com/w320/tm.png
// day7.js:101 Kosovo Pristina https://flagcdn.com/w320/xk.png
// day7.js:101 Ivory Coast Yamoussoukro https://flagcdn.com/w320/ci.png
// day7.js:101 Morocco Rabat https://flagcdn.com/w320/ma.png
// day7.js:101 Dominican Republic Santo Domingo https://flagcdn.com/w320/do.png
// day7.js:101 Ghana Accra https://flagcdn.com/w320/gh.png
// day7.js:101 Vatican City Vatican City https://flagcdn.com/w320/va.png
// day7.js:101 Jersey Saint Helier https://flagcdn.com/w320/je.png
// day7.js:101 Turkey Ankara https://flagcdn.com/w320/tr.png
// day7.js:101 Tuvalu Funafuti https://flagcdn.com/w320/tv.png
// day7.js:101 Iran Tehran https://flagcdn.com/w320/ir.png
// day7.js:101 Egypt Cairo https://flagcdn.com/w320/eg.png
// day7.js:101 Denmark Copenhagen https://flagcdn.com/w320/dk.png
// day7.js:101 Kenya Nairobi https://flagcdn.com/w320/ke.png
// day7.js:101 Bulgaria Sofia https://flagcdn.com/w320/bg.png
// day7.js:101 Zimbabwe Harare https://flagcdn.com/w320/zw.png
// day7.js:101 Angola Luanda https://flagcdn.com/w320/ao.png
// day7.js:101 Nigeria Abuja https://flagcdn.com/w320/ng.png
// day7.js:101 Poland Warsaw https://flagcdn.com/w320/pl.png
// day7.js:101 Senegal Dakar https://flagcdn.com/w320/sn.png
// day7.js:101 Saint Helena, Ascension and Tristan da Cunha Jamestown https://flagcdn.com/w320/sh.png
// day7.js:101 Lebanon Beirut https://flagcdn.com/w320/lb.png
// day7.js:101 Samoa Apia https://flagcdn.com/w320/ws.png
// day7.js:101 Philippines Manila https://flagcdn.com/w320/ph.png
// day7.js:101 Guernsey St. Peter Port https://flagcdn.com/w320/gg.png
// day7.js:101 El Salvador San Salvador https://flagcdn.com/w320/sv.png
// day7.js:101 Kuwait Kuwait City https://flagcdn.com/w320/kw.png
// day7.js:101 Tonga Nuku'alofa https://flagcdn.com/w320/to.png
// day7.js:101 Oman Muscat https://flagcdn.com/w320/om.png
// day7.js:101 Afghanistan Kabul https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
// day7.js:101 Saint Kitts and Nevis Basseterre https://flagcdn.com/w320/kn.png
// day7.js:101 Central African Republic Bangui https://flagcdn.com/w320/cf.png
// day7.js:101 Serbia Belgrade https://flagcdn.com/w320/rs.png
// day7.js:101 Armenia Yerevan https://flagcdn.com/w320/am.png
// day7.js:101 Bangladesh Dhaka https://flagcdn.com/w320/bd.png
// day7.js:101 Laos Vientiane https://flagcdn.com/w320/la.png
// day7.js:101 Chile Santiago https://flagcdn.com/w320/cl.png
// day7.js:101 French Polynesia Papeetē https://flagcdn.com/w320/pf.png
// day7.js:101 Panama Panama City https://flagcdn.com/w320/pa.png
// day7.js:101 United States Washington, D.C. https://flagcdn.com/w320/us.png
// day7.js:101 Nepal Kathmandu https://flagcdn.com/w320/np.png
// day7.js:101 Myanmar Naypyidaw https://flagcdn.com/w320/mm.png
// day7.js:101 Falkland Islands Stanley https://flagcdn.com/w320/fk.png
// day7.js:101 Hungary Budapest https://flagcdn.com/w320/hu.png
// day7.js:101 Palau Ngerulmud https://flagcdn.com/w320/pw.png
// day7.js:101 Equatorial Guinea Malabo https://flagcdn.com/w320/gq.png
// day7.js:101 Guinea Conakry https://flagcdn.com/w320/gn.png
// day7.js:101 United Arab Emirates Abu Dhabi https://flagcdn.com/w320/ae.png
// day7.js:101 Turks and Caicos Islands Cockburn Town https://flagcdn.com/w320/tc.png
// day7.js:101 British Virgin Islands Road Town https://flagcdn.com/w320/vg.png
// day7.js:101 Liechtenstein Vaduz https://flagcdn.com/w320/li.png
// day7.js:101 Bosnia and Herzegovina Sarajevo https://flagcdn.com/w320/ba.png
// day7.js:101 Malawi Lilongwe https://flagcdn.com/w320/mw.png
// day7.js:101 Bhutan Thimphu https://flagcdn.com/w320/bt.png
// day7.js:101 Cameroon Yaoundé https://flagcdn.com/w320/cm.png
// day7.js:101 Andorra Andorra la Vella https://flagcdn.com/w320/ad.png
// day7.js:101 Guadeloupe Basse-Terre https://flagcdn.com/w320/gp.png
// day7.js:101 Republic of the Congo Brazzaville https://flagcdn.com/w320/cg.png
// day7.js:101 Réunion Saint-Denis https://flagcdn.com/w320/re.png
// day7.js:101 Burkina Faso Ouagadougou https://flagcdn.com/w320/bf.png
// day7.js:101 Jordan Amman https://flagcdn.com/w320/jo.png
// day7.js:101 DR Congo Kinshasa https://flagcdn.com/w320/cd.png
// day7.js:101 Tokelau Fakaofo https://flagcdn.com/w320/tk.png
// day7.js:101 Vietnam Hanoi https://flagcdn.com/w320/vn.png
// day7.js:101 Sint Maarten Philipsburg https://flagcdn.com/w320/sx.png
// day7.js:101 Belgium Brussels https://flagcdn.com/w320/be.png
// day7.js:101 United States Minor Outlying Islands Washington DC https://flagcdn.com/w320/um.png
// day7.js:101 Brazil Brasília https://flagcdn.com/w320/br.png
// day7.js:101 Belize Belmopan https://flagcdn.com/w320/bz.png
// day7.js:101 Antigua and Barbuda Saint John's https://flagcdn.com/w320/ag.png
// day7.js:101 Paraguay Asunción https://flagcdn.com/w320/py.png
// day7.js:101 Benin Porto-Novo https://flagcdn.com/w320/bj.png
// day7.js:101 Brunei Bandar Seri Begawan https://flagcdn.com/w320/bn.png
// day7.js:101 Bolivia Sucre https://flagcdn.com/w320/bo.png
// day7.js:101 Djibouti Djibouti https://flagcdn.com/w320/dj.png
// day7.js:101 French Guiana Cayenne https://flagcdn.com/w320/gf.png
// day7.js:101 Canada Ottawa https://flagcdn.com/w320/ca.png
// day7.js:101 Saint Pierre and Miquelon Saint-Pierre https://flagcdn.com/w320/pm.png
// day7.js:101 Japan Tokyo https://flagcdn.com/w320/jp.png
// day7.js:101 Rwanda Kigali https://flagcdn.com/w320/rw.png
// day7.js:101 Saint Vincent and the Grenadines Kingstown https://flagcdn.com/w320/vc.png
// day7.js:101 Iceland Reykjavik https://flagcdn.com/w320/is.png
// day7.js:101 Belarus Minsk https://flagcdn.com/w320/by.png
// day7.js:101 Hong Kong City of Victoria https://flagcdn.com/w320/hk.png
// day7.js:101 Lesotho Maseru https://flagcdn.com/w320/ls.png
// day7.js:101 Fiji Suva https://flagcdn.com/w320/fj.png
// day7.js:101 Austria Vienna https://flagcdn.com/w320/at.png
// day7.js:101 Colombia Bogotá https://flagcdn.com/w320/co.png
// day7.js:101 Gabon Libreville https://flagcdn.com/w320/ga.png
// day7.js:101 Saudi Arabia Riyadh https://flagcdn.com/w320/sa.png
// day7.js:101 South Georgia King Edward Point https://flagcdn.com/w320/gs.png
// day7.js:101 Ethiopia Addis Ababa https://flagcdn.com/w320/et.png
// day7.js:101 Caribbean Netherlands Kralendijk https://flagcdn.com/w320/bq.png
// day7.js:101 Monaco Monaco https://flagcdn.com/w320/mc.png
// day7.js:101 North Korea Pyongyang https://flagcdn.com/w320/kp.png
// day7.js:101 Italy Rome https://flagcdn.com/w320/it.png
// day7.js:101 Namibia Windhoek https://flagcdn.com/w320/na.png
// day7.js:101 Mongolia Ulan Bator https://flagcdn.com/w320/mn.png
// day7.js:101 Solomon Islands Honiara https://flagcdn.com/w320/sb.png
// day7.js:101 Yemen Sana'a https://flagcdn.com/w320/ye.png
// day7.js:101 Romania Bucharest https://flagcdn.com/w320/ro.png
// day7.js:101 Svalbard and Jan Mayen Longyearbyen https://flagcdn.com/w320/sj.png
// day7.js:101 France Paris https://flagcdn.com/w320/fr.png





//1.d Print the total population of countries using reduce function


// let countries= new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v3.1/all");
// countries.send();
// countries.onload=function(){
// let data=countries.response;
// let result=JSON.parse(data);
// var result1=result.reduce((acc,cv)=>acc+cv.population,0);
//     console.log('Total population:',result1);
// }

//output
//Total population: 7777721563

//1.e Print the country which uses US Dollars as currency.

// let countries= new XMLHttpRequest();
// countries.open("GET","https://restcountries.com/v2/all");
// countries.send();
// countries.onload=function(){
// let data=countries.response;
// let result=JSON.parse(data);
//  var res=result.filter((ele)=>{
//     for(let key in ele.currencies){
//         if(ele.currencies[key].code==="USD"){
//             console.log(ele.name)
//         }
//     }
//  })
// }

// output:
// American Samoa
// day7.js:396 Bonaire, Sint Eustatius and Saba
// day7.js:396 British Indian Ocean Territory
// day7.js:396 Virgin Islands (British)
// day7.js:396 Virgin Islands (U.S.)
// day7.js:396 Cambodia
// day7.js:396 Ecuador
// day7.js:396 El Salvador
// day7.js:396 Guam
// day7.js:396 Marshall Islands
// day7.js:396 Micronesia (Federated States of)
// day7.js:396 Northern Mariana Islands
// day7.js:396 Palau
// day7.js:396 Panama
// day7.js:396 Puerto Rico
// day7.js:396 Timor-Leste
// day7.js:396 Turks and Caicos Islands
// day7.js:396 United States of America