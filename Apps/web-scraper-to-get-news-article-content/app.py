import requests
from bs4 import BeautifulSoup
import datetime
import sys

output = {} # Place to keep the scraping result
date = datetime.datetime.now()
date = date.strftime("%d/%m/%Y")

try:
    print("Sending request to the URL...")

    headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US, en;q=0.9"
    } # Headers for making natural-user-like request
    url = sys.argv[1] 
    html_page = requests.get(url, headers=headers) # Sending the request with HTTP GET

    soup = BeautifulSoup(html_page.content.decode("utf-8", errors="ignore"), features='html.parser') # Using BeautifulSoup to parse the HTML Content

    output['title'] = soup.find('h1').text or "Title not found" # Asumming h1 has the title, extracting the title 
    output['metadata'] = {
        "URL": url,
        "Date": date,
    }
    output['content'] = soup.find_all('p')
    output['content'] = "".join([p.text for p in output['content']]) # Assuming all contents is in the p element, extracting the content

    with open(f'{output["title"].replace("\n", "").replace("?", "").strip()}.md', 'w') as file: # Writing the output into a file named 'output.md'
        file.writelines([str(output['metadata']), '\n\n', output['title'], '\n\n', output['content']])
        print(f"Output file: {output["title"].replace("\n", "").replace("?", "").strip()}.md")
    print("Done!")
except Exception as e:
    print('Error:', e)