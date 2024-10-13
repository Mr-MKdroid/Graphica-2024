let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-advance slides
setInterval(nextSlide, 5000);

const tiles = [
    { title: "Part XIX: Miscellaneous", content: "Articles 361 to 367" },
    { title: "Part XX: Amendment of the Constitution", content: "Article 368" },
    { title: "Part XXI: Temporary, Transitional and Special Provisions", content: "Articles 369 to 392" }
];

let currentIndex = 0;

function updateTiles() {
    const tileElements = document.querySelectorAll('.tile');
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % tiles.length;
        tileElements[i].innerHTML = `<h2>${tiles[index].title}</h2><p>${tiles[index].content}</p>`;
    }
}

function cycleTiles(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % tiles.length;
    } else {
        currentIndex = (currentIndex - 1 + tiles.length) % tiles.length;
    }
    updateTiles();
}

// Initialize tiles
updateTiles();
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

function autoCycleTiles() {
    cycleTiles('next');
}

// Event listeners for arrow buttons
leftArrow.addEventListener('click', () => cycleTiles('prev'));
rightArrow.addEventListener('click', () => cycleTiles('next'));

// Automatically cycle tiles every 5 seconds
setInterval(autoCycleTiles, 2000);





// Sample array of articles

const articles = [
    { article: "Article 14", description: "Equality before law." },
    { article: "Article 19", description: "Protection of certain rights regarding freedom of speech, etc." },
    { article: "Article 21", description: "Protection of life and personal liberty." },
    { article: "Article 1", description: "Name and territory of the Union." },
          { article: "Article 2", dscription: "Admission or establishment of new States." },
          { article: "Article 3", dscription: "Formation of new States and alteration of areas, boundaries or names of existing States." },
          { article: "Article 4", dscription: "Laws made under articles 2 and 3 to provide for the composition of the Legislative Assemblies." },
          { article: "Article 5", dscription: "Citizenship at the commencement of the Constitution." },
          { article: "Article 6", dscription: "Rights of citizenship of certain persons who have migrated to India from Pakistan." },
          { article: "Article 7", dscription: "Rights of citizenship of certain persons of Indian origin residing outside India." },
          { article: "Article 8", dscription: "Rights of citizenship of certain persons of Indian origin residing outside India." },
          { article: "Article 9", dscription: "Persons voluntarily acquiring citizenship of a foreign State not to be citizens." },
          { article: "Article 10", description: "Continuance of the rights of citizenship." },
          { article: "Article 11", description: "Parliament to regulate the right of citizenship by law." },
          { article: "Article 12", description: "Definition." },
          { article: "Article 13", description: "Laws inconsistent with or in derogation of the Fundamental Rights." },
          { article: "Article 14", description: "Equality before law." },
          { article: "Article 15", description: "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth." },
          { article: "Article 16", description: "Equality of opportunity in matters of public employment." },
          { article: "Article 17", description: "Abolition of untouchability." },
          { article: "Article 18", description: "Abolition of titles." },
          { article: "Article 19", description: "Protection of certain rights regarding freedom of speech, etc." },
          { article: "Article 20", description: "Protection in respect of conviction for offences." },
          { article: "Article 21", description: "Protection of life and personal liberty." },
          { article: "Article 22", description: "Protection against arrest and detention." },
          { article: "Article 23", description: "Prohibition of traffic in human beings and forced labour." },
          { article: "Article 24", description: "Prohibition of employment of children in factories, etc." },
          { article: "Article 25", description: "Freedom of conscience and free profession, practice and propagation of religion." },
          { article: "Article 26", description: "Freedom to manage religious affairs." },
          { article: "Article 27", description: "Freedom as to payment of taxes for promotion of any particular religion." },
          { article: "Article 28", description: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions." },
          { article: "Article 29", description: "Protection of interests of minorities." },
          { article: "Article 30", description: "Rights of minorities to establish and administer educational institutions." },
          { article: "Article 31", description: "Compensation for property taken for public purposes." },
          { article: "Article 32", description: "Remedies for enforcement of rights conferred by this Part." },
          { article: "Article 33", description: "Power of Parliament to restrict rights conferred by this Part." },
          { article: "Article 34", description: "Restriction on rights conferred by this Part while martial law is in force in any area." },
          { article: "Article 35", description: "Legislative power of the State in respect of certain rights." },
          { article: "Article 36", description: "Definition." },
          { article: "Article 37", description: "Application of the principles contained in this Part." },
          { article: "Article 38", description: "State to secure a social order for the promotion of the welfare of the people." },
          { article: "Article 39", description: "Certain principles of policy to be followed by the State." },
          { article: "Article 40", description: "Organization of village panchayats." },
          { article: "Article 41", description: "Right to work, to education and to public assistance in certain cases." },
          { article: "Article 42", description: "Provision for just and humane conditions of work and maternity relief." },
          { article: "Article 43", description: "Living wage, etc., for workers." },
          { article: "Article 44", description: "Uniform civil code for the citizens." },
          { article: "Article 45", description: "Provision for early childhood care and education to children below the age of six years." },
          { article: "Article 46", description: "Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections." },
          { article: "Article 47", description: "Duty of the State to raise the level of nutrition and the standard of living." },
          { article: "Article 48", description: "Organization of agriculture and animal husbandry." },
          { article: "Article 49", description: "Protection of monuments and places and objects of national importance." },
          { article: "Article 50", description: "Separation of the judiciary from the executive." },
          { article: "Article 51", description: "Promotion of international peace and security." },
          { article: "Article 51A",description: "Fundamental duties." },
          { article: "Article 52", description: "The President of India." },
          { article: "Article 53", description: "Executive power of the Union." },
          { article: "Article 54", description: "Election of the President." },
          { article: "Article 55", description: "Manner of election of the President." },
          { article: "Article 56", description: "Term of office of President." },
          { article: "Article 57", description: "Eligibility for reelection." },
          { article: "Article 58", description: "Qualifications for election as President." },
          { article: "Article 59", description: "Conditions of President's office." },
          { article: "Article 60", description: "Oath or affirmation by the President." },
          { article: "Article 61", description: "Procedure for impeachment of the President." },
          { article: "Article 62", description: "Time of holding elections to the office of President and the Vice President." },
          { article: "Article 63", description: "The Vice President of India." },
          { article: "Article 64", description: "The Vice President to be ex-officio Chairman of the Council of States." },
          { article: "Article 65", description: "Powers of the Vice President." },
          { article: "Article 66", description: "Election of the Vice President." },
          { article: "Article 67", description: "Term of office of Vice President." },
          { article: "Article 68", description: "Time of holding elections to the office of Vice President." },
          { article: "Article 69", description: "Oath or affirmation by the Vice President." },
          { article: "Article 70", description: "Discharge of President's functions in certain contingencies." },
          { article: "Article 71", description: "Provisions as to the establishment of the Council of Ministers." },
          { article: "Article 72", description: "Power of President to grant pardons." },
          { article: "Article 73", description: "Extent of executive power of the Union." },
          { article: "Article 74", description: "Council of Ministers to aid and advise the President." },
          { article: "Article 75", description: "Other provisions as to the Council of Ministers." },
          { article: "Article 76", description: "Attorney General for India." },
          { article: "Article 77", description: "Conduct of business of the Government of India." },
          { article: "Article 78", description: "President to act according to the advice of the Council of Ministers." },
          { article: "Article 79", description: "Constitution of Parliament." },
          { article: "Article 80", description: "Composition of the Rajya Sabha." },
          { article: "Article 81", description: "Composition of the Lok Sabha." },
          { article: "Article 82", description: "Readjustment after the census." },
          { article: "Article 83", description: "Duration of Houses of Parliament." },
          { article: "Article 84", description: "Qualifications for membership of Parliament." },
          { article: "Article 85", description: "Sessions of Parliament, prorogation and dissolution." },
          { article: "Article 86", description: "Right of President to address and send messages to Parliament." },
          { article: "Article 87", description: "Special address by the President." },
          { article: "Article 88", description: "Rights of Ministers as respects Parliament." },
          { article: "Article 89", description: "Provisions for the Vice President." },
          { article: "Article 90", description: "Power of the Speaker to adjourn the House." },
          { article: "Article 91", description: "Power of the Speaker to call for information." },
          { article: "Article 92", description: "Power of Parliament to regulate its own procedure." },
          { article: "Article 93", description: "Speaker and Deputy Speaker of the Lok Sabha." },
          { article: "Article 94", description: "Powers of the Speaker." },
          { article: "Article 95", description: "Vacancy in the office of Speaker." },
          { article: "Article 96", description: "Provisions as to the Deputy Speaker." },
          { article: "Article 97", description: "Vacancy in the office of Deputy Speaker." },
          { article: "Article 98", description: "Provisions as to the President." },
          { article: "Article 99", description: "Oath or affirmation by the members of Parliament." },
          { article: "Article 100", description: "Voting in the Houses." },
          { article: "Article 101", description: "Disqualifications for membership of Parliament." },
          { article: "Article 102", description: "Disqualifications for membership of Parliament." },
          { article: "Article 103", description: "Decision on questions as to disqualifications." },
          { article: "Article 104", description: "Disqualification on ground of defection." },
          { article: "Article 105", description: "Powers, privileges, and immunities of the Parliament." },
          { article: "Article 106", description: "Salaries and allowances of members of Parliament." },
          { article: "Article 107", description: "Provisions as to recommendations for legislation." },
          { article: "Article 108", description: "Joint sitting of both Houses." },
          { article: "Article 109", description: "Special procedure in respect of Money Bills." },
          { article: "Article 110", description: "Definition of Money Bills." },
          { article: "Article 111", description: "Assent to Bills." },
          { article: "Article 112", description: "Annual financial statement." },
          { article: "Article 113", description: "Supplementary grants." },
          { article: "Article 114", description: "Appropriation Bills." },
          { article: "Article 115", description: "Reports of the Comptroller and Auditor-General." },
          { article: "Article 116", description: "Declaration of the financial state." },
          { article: "Article 117", description: "Legislation by Parliament." },
          { article: "Article 118", description: "Procedure in Parliament." },
          { article: "Article 119", description: "Parliamentary privileges." },
          { article: "Article 120", description: "Conduct of business." },
          { article: "Article 121", description: "Restrictions on discussion in Parliament." },
          { article: "Article 122", description: "Court not to inquire into proceedings of Parliament." },
          { article: "Article 123", description: "Power of the President to promulgate ordinances." },
          { article: "Article 124", description: "Establishment and constitution of Supreme Court." },
          { article: "Article 125", description: "Salaries, etc., of Judges." },
          { article: "Article 126", description: "Appointment of acting Chief Justice." },
          { article: "Article 127", description: "Appointment of ad hoc judges." },
          { article: "Article 128", description: "Attendance of retired Judges at sittings of the Supreme Court." },
          { article: "Article 129", description: "Supreme Court to be a court of record." },
          { article: "Article 130", description: "Seat of the Supreme Court." },
          { article: "Article 131", description: "Original jurisdiction of the Supreme Court." },
          { article: "Article 132", description: "Appellate jurisdiction of Supreme Court in regard to constitutional matters." },
          { article: "Article 133", description: "Appellate jurisdiction of Supreme Court in regard to other matters." },
          { article: "Article 134", description: "Appeals to the Supreme Court." },
          { article: "Article 135", description: "Jurisdiction and powers of the Supreme Court." },
          { article: "Article 136", description: "Special leave to appeal by the Supreme Court." },
          { article: "Article 137", description: "Review of judgments or orders by the Supreme Court." },
          { article: "Article 138", description: "Enlargement of the jurisdiction of the Supreme Court." },
          { article: "Article 139", description: "Power of the Supreme Court to issue certain writs." },
          { article: "Article 140", description: "Power of the Supreme Court to make rules." },
          { article: "Article 141", description: "Law declared by Supreme Court to be binding on all courts." },
          { article: "Article 142", description: "Enforcement of decrees and orders of Supreme Court." },
          { article: "Article 143", description: "Power of the President to consult Supreme Court." },
          { article: "Article 144", description: "Civil and judicial authorities to act in aid of the Supreme Court." },
          { article: "Article 145", description: "Rules of court." },
          { article: "Article 146", description: "Appointment of officers and servants of the Supreme Court." },
          { article: "Article 147", description: "Interpretation." },
          { article: "Article 148", description: "Comptroller and Auditor-General of India." },
          { article: "Article 149", description: "Duties and powers of the Comptroller and Auditor-General." },
          { article: "Article 150", description: "Form of accounts of the Union and of the States." },
          { article: "Article 151", description: "Audit reports." },
          { article: "Article 152", description: "Definition." },
          { article: "Article 153", description: "Governors of States." },
          { article: "Article 154", description: "Executive power of the State." },
          { article: "Article 155", description: "Appointment of Governors." },
          { article: "Article 156", description: "Term of office of Governor." },
          { article: "Article 157", description: "Qualifications for appointment as Governor." },
          { article: "Article 158", description: "Conditions of Governor's office." },
          { article: "Article 159", description: "Oath or affirmation by the Governor." },
          { article: "Article 160", description: "Discharge of the functions of the Governor." },
          { article: "Article 161", description: "Pardoning powers of the Governor." },
          { article: "Article 162", description: "Extent of the executive power of the State." },
          { article: "Article 163", description: "Council of Ministers to aid and advise the Governor." },
          { article: "Article 164", description: "Other provisions as to the Council of Ministers." },
          { article: "Article 165", description: "Power of Governor to appoint a Chief Minister." },
          { article: "Article 166", description: "Conduct of business of the Government of a State." },
          { article: "Article 167", description: "Powers of the Governor." },
          { article: "Article 168", description: "Constitution of the Legislatures of States." },
          { article: "Article 169", description: "Abolition of Legislative Councils." },
          { article: "Article 170", description: "Composition of Legislative Assemblies." },
          { article: "Article 171", description: "Composition of Legislative Councils." },
          { article: "Article 172", description: "Duration of State Legislatures." },
          { article: "Article 173", description: "Qualifications for membership of the State Legislatures." },
          { article: "Article 174", description: "Summoning and prorogation of the House." },
          { article: "Article 175", description: "Address by the Governor." },
          { article: "Article 176", description: "Special address by the Governor." },
          { article: "Article 177", description: "Rights of Ministers as respects State Legislatures." },
          { article: "Article 178", description: "Speaker and Deputy Speaker of the Legislative Assembly." },
          { article: "Article 179", description: "Powers of the Speaker." },
          { article: "Article 180", description: "Provisions as to the Deputy Speaker." },
          { article: "Article 181", description: "Provisions as to the President." },
          { article: "Article 182", description: "Oath or affirmation by the members of the State Legislature." },
          { article: "Article 183", description: "Voting in the Houses." },
          { article: "Article 184", description: "Disqualifications for membership of State Legislatures." },
          { article: "Article 185", description: "Powers, privileges, and immunities of the State Legislatures." },
          { article: "Article 186", description: "Salaries and allowances of members of State Legislatures." },
          { article: "Article 187", description: "Provisions as to recommendations for legislation." },
          { article: "Article 188", description: "Joint sitting of both Houses." },
          { article: "Article 189", description: "Special procedure in respect of Money Bills." },
          { article: "Article 190", description: "Definition of Money Bills." },
          { article: "Article 191", description: "Assent to Bills." },
          { article: "Article 192", description: "Annual financial statement." },
          { article: "Article 193", description: "Supplementary grants." },
          { article: "Article 194", description: "Appropriation Bills." },
          { article: "Article 195", description: "Reports of the Comptroller and Auditor-General." },
          { article: "Article 196", description: "Declaration of the financial state." },
          { article: "Article 197", description: "Legislation by Parliament." },
          { article: "Article 198", description: "Procedure in Parliament." },
          { article: "Article 199", description: "Parliamentary privileges." },
          { article: "Article 200", description: "Conduct of business." },
          { article: "Article 201", description: "Restrictions on discussion in Parliament." },
          { article: "Article 202", description: "Court not to inquire into proceedings of Parliament." },
          { article: "Article 203", description: "Power of the President to promulgate ordinances." },
          { article: "Article 204", description: "Establishment and constitution of High Courts." },
          { article: "Article 205", description: "Salaries, etc., of Judges." },
          { article: "Article 206", description: "Appointment of acting Chief Justice." },
          { article: "Article 207", description: "Appointment of ad hoc judges." },
          { article: "Article 208", description: "Attendance of retired Judges at sittings of the High Court." },
          { article: "Article 209", description: "High Court to be a court of record." },
          { article: "Article 210", description: "Seat of the High Court." },
          { article: "Article 211", description: "Original jurisdiction of the High Court." },
          { article: "Article 212", description: "Appellate jurisdiction of High Court in regard to constitutional matters." },
          { article: "Article 213", description: "Appellate jurisdiction of High Court in regard to other matters." },
          { article: "Article 214", description: "Jurisdiction and powers of the High Court." },
          { article: "Article 215", description: "Special leave to appeal by the High Court." },
          { article: "Article 216", description: "Review of judgments or orders by the High Court." },
          { article: "Article 217", description: "Enlargement of the jurisdiction of the High Court." },
          { article: "Article 218", description: "Power of the High Court to issue certain writs." },
          { article: "Article 219", description: "Power of the High Court to make rules." },
          { article: "Article 220", description: "Law declared by High Court to be binding on all courts." },
          { article: "Article 221", description: "Enforcement of decrees and orders of High Court." },
          { article: "Article 222", description: "Power of the President to consult High Court." },
          { article: "Article 223", description: "Civil and judicial authorities to act in aid of the High Court." },
          { article: "Article 224", description: "Rules of court." },
          { article: "Article 225", description: "Appointment of officers and servants of the High Court." },
          { article: "Article 226", description: "Interpretation." },
          { article: "Article 227", description: "Supreme Court of India." },
          { article: "Article 228", description: "Power of the High Court to regulate its own procedure." },
          { article: "Article 229", description: "Establishment of Tribunals." },
          { article: "Article 230", description: "Tribunals to have powers of High Court." },
          { article: "Article 231", description: "Provision for establishment of a common High Court for two or more States." },
          { article: "Article 232", description: "Special provisions for the establishment of a Tribunals." },
          { article: "Article 233", description: "Appointment of officers of the Tribunals." },
          { article: "Article 234", description: "Transfer of cases." },
          { article: "Article 235", description: "Powers of the Tribunals." },
          { article: "Article 236", description: "Special provisions for the establishment of other Courts." },
          { article: "Article 237", description: "Special provisions for the establishment of other authorities." },
          { article: "Article 238", description: "Special provisions for the establishment of other agencies." },
          { article: "Article 239", description: "Administration of Union territories." },
          { article: "Article 240", description: "Power of Parliament to make laws for Union territories." },
          { article: "Article 241", description: "Administration of Union territories." },
          { article: "Article 242", description: "Union territories of Delhi and Puducherry." },
          { article: "Article 243", description: "Panchayats." },
          { article: "Article 244", description: "Scheduled Areas and Scheduled Tribes." },
          { article: "Article 245", description: "Power of Parliament to make laws for the States." },
          { article: "Article 246", description: "Subject matter of laws made by Parliament and by the Legislatures of States." },
          { article: "Article 247", description: "Power of Parliament to make laws for certain matters." },
          { article: "Article 248", description: "Residuary powers." },
          { article: "Article 249", description: "Power of Parliament to legislate on a matter in the State List in the national interest." },
          { article: "Article 250", description: "Power of Parliament to legislate for two or more States by consent." },
          { article: "Article 251", description: "Power of Parliament to legislate on a matter in the State List for the purpose of the Union." },
          { article: "Article 252", description: "Power of Parliament to legislate for two or more States." },
          { article: "Article 253", description: "Legislation for giving effect to international agreements." },
          { article: "Article 254", description: "Inconsistency between laws made by Parliament and laws made by the Legislatures of States." },
          { article: "Article 255", description: "Laws made under articles 253 and 254." },
          { article: "Article 256", description: "Obligation of States and the Union." },
          { article: "Article 257", description: "Control of the Union over the States." },
          { article: "Article 258", description: "Power of the Union to confer powers on the States." },
          { article: "Article 259", description: "Power of the Union to confer powers on the States." },
          { article: "Article 260", description: "Power of the Union to confer powers on the States." },
          { article: "Article 261", description: "Full faith and credit for public acts." },
          { article: "Article 262", description: "Adjudication of disputes relating to waters." },
          { article: "Article 263", description: "Provision for the establishment of an Inter-State Council." },
          { article: "Article 264", description: "Administration of Union territories." },
          { article: "Article 265", description: "No tax shall be levied except by authority of law." },
          { article: "Article 266", description: "Consolidated Fund of India." },
          { article: "Article 267", description: "Contingency Fund of India." },
          { article: "Article 268", description: "Taxes levied by the Union but collected by the States." },
          { article: "Article 269", description: "Taxes levied and collected by the Union." },
          { article: "Article 270", description: "Taxes levied and collected by the Union." },
          { article: "Article 271", description: "Distribution of taxes between the Union and the States." },
          { article: "Article 272", description: "Provisions for the taxation of the States." },
          { article: "Article 273", description: "Provisions for the taxation of the States." },
          { article: "Article 274", description: "Provisions for the taxation of the States." },
          { article: "Article 275", description: "Grants from the Union to the States." },
          { article: "Article 276", description: "Taxes on professions, trades, callings, and employments." },
          { article: "Article 277", description: "Taxes on professions, trades, callings, and employments." },
          { article: "Article 278", description: "Taxes on professions, trades, callings, and employments." },
          { article: "Article 279", description: "Provisions relating to taxes on professions, trades, callings, and employments." },
          { article: "Article 280", description: "Finance Commission." },
          { article: "Article 281", descripion: "Recomendations of the Finance Commission." },
          { article: "Article 282", description: "Discretionary grants." },
          { article: "Article 283", description: "Custody of Consolidated Fund." },
          { article: "Article 284", description: "Custody of Contingency Fund." },
          { article: "Article 285", description: "Exemption from taxation." },
          { article: "Article 286", description: "Restrictions on taxes on goods and services." },
          { article: "Article 287", description: "Restrictions on taxes on goods and services." },
          { article: "Article 288", description: "Restrictions on taxes on goods and services." },
          { article: "Article 289", description: "Restrictions on taxation." },
          { article: "Article 290", description: "Provisions for taxation." },
          { article: "Article 291", description: "Discretionary grants." },
          { article: "Article 292", description: "Borrowing by the Union." },
          { article: "Article 293", description: "Borrowing by the States." },
          { article: "Article 294", description: "Custody of revenues." },
          { article: "Article 295", description: "Accountability for public expenditure." },
          { article: "Article 296", description: "Establishment of audit offices." },
          { article: "Article 297", description: "Transfer of resources." },
          { article: "Article 298", description: "Laws regulating trade." },
          { article: "Article 299", description: "Contracts." },
          { article: "Article 300", description: "Suits and proceedings." },
          { article: "Article 301", description: "Freedom of trade." },
          { article: "Article 302", description: "Power of Parliament to impose restrictions." },
          { article: "Article 303", description: "Restrictions on Parliament." },
          { article: "Article 304", description: "Restrictions on Parliament." },
          { article: "Article 305", description: "Laws made under Articles 302 and 304." },
          { article: "Article 306", description: "Laws made under Articles 302 and 304." },
          { article: "Article 307", description: "Laws made under Articles 302 and 304." },
          { article: "Article 308", description: "Interpretation." },
          { article: "Article 309", description: "Service of Union and State." },
          { article: "Article 310", description: "Conditions of service of members of the armed forces." },
          { article: "Article 311", description: "Disciplinary proceedings." },
          { article: "Article 312", description: "All India Services." },
          { article: "Article 313", description: "Conditions of service of members of All India Services." },
          { article: "Article 314", description: "Conditions of service of members of All India Services." },
          { article: "Article 315", description: "Public Service Commissions." },
          { article: "Article 316", description: "Appointment of members." },
          { article: "Article 317", description: "Conditions of service." },
          { article: "Article 318", description: "Power to make regulations." },
          { article: "Article 319", description: "Provisions as to the composition of the Public Service Commissions." },
          { article: "Article 320", description: "Functions of Public Service Commissions." },
          { article: "Article 321", description: "Power to make regulations." },
          { article: "Article 322", description: "Powers of Public Service Commissions." },
          { article: "Article 323", description: "Power of the Union to confer powers on the States." },
          { article: "Article 324", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 325", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 326", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 327", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 328", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 329", description: "Elections to the Parliament and to the Legislatures of the States." },
          { article: "Article 330", description: "Reservations for Scheduled Castes and Scheduled Tribes." },
          { article: "Article 331", description: "Representation of Anglo-Indians." },
          { article: "Article 332", description: "Representation of the Anglo-Indians in the Legislative Assemblies." },
          { article: "Article 333", description: "Representation of the Anglo-Indians in the Legislative Assemblies." },
          { article: "Article 334", description: "Reservation of seats for Scheduled Castes and Scheduled Tribes." },
          { article: "Article 335", description: "Claims of Scheduled Castes and Scheduled Tribes." },
          { article: "Article 336", description: "Special provisions for certain classes." },
          { article: "Article 337", description: "Special provisions for certain classes." },
          { article: "Article 338", description: "National Commission for Scheduled Castes." },
          { article: "Article 339", description: "Special responsibility of the Union." },
          { article: "Article 340", description: "Commission for Backward Classes." },
          { article: "Article 341", description: "Scheduled Castes." },
          { article: "Article 342", description: "Scheduled Tribes." },
          { article: "Article 343", description: "Official language of the Union." },
          { article: "Article 344", description: "Commission for the languages." },
          { article: "Article 345", description: "Official language or languages of a State." },
          { article: "Article 346", description: "Official language for communication between States." },
          { article: "Article 347", description: "Special provision relating to certain languages." },
          { article: "Article 348", description: "Language to be used in the Supreme Court and High Courts." },
          { article: "Article 349", description: "Language to be used in the Supreme Court and High Courts." },
          { article: "Article 350", description: "Facilities for instruction in mother-tongue." },
          { article: "Article 351", description: "Directive for development of the Hindi language." },
]

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', function () {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Search the articles array for the user's query
    const result = articles.find(article => article.article.toLowerCase().includes(searchQuery));

    if (result) {
        // Display the article information
        displayArticle(result);
    } else {
        // Show message if no article is found
        document.getElementById('articleDisplay').innerHTML = '<p>No matching article found.</p>';
    }
});

// Function to dynamically display the article information
function displayArticle(article) {
    const articleDisplay = document.getElementById('articleDisplay');
    
    articleDisplay.innerHTML = `
        <h2>${article.article}</h2>
        <p>${article.description}</p>
    `;
}

