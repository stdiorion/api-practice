"""
GETメソッドでJSONデータを取ってくる練習 
"""
import requests
import pprint
import pandas as pd


# Retrieve the raw response data from Requests response object
def get_raw_response(res):
    res_headers = "\n".join(f"{k}: {v}" for k, v in res.headers.items())

    raw_response = []

    raw_response.append(f"HTTP/1.1 {res.status_code} {res.reason}")
    raw_response.append(f"{res_headers}")
    raw_response.append(f"")
    raw_response.append(f"{res.text}")

    return "\n".join(raw_response)


def main():
    res = requests.get("http://localhost:8080/articles")
    res_json = res.json()
    print()

    # Reproduced raw response
    print("Raw Response -------------------------")
    print(get_raw_response(res))
    print()

    # Here you've got json
    print("JSON Format --------------------------")
    pprint.pprint(res_json)
    print()

    # Convert into Pandas DataFrame
    print("DataFrame Format ---------------------")
    res_df = pd.json_normalize(res_json["articles"])
    print(res_df)
    print()


if __name__ == "__main__":
    main()
