import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import elem from '../assets/serranz.png';
function Educ() {
    return (
        <>
           <h1 className='text-center'>Education</h1>
           <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={elem} />
            <Card.Body>
                <Card.Title>Serranz Learning Center Inc.</Card.Title>
                <Card.Text>
                I graduated from Serranz Learning Center Inc. on March 27, 2016. It was a significant milestone in my academic journey, marking the completion of my elementary education. This achievement laid the foundation for my future learning experiences and personal growth..
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://unc.neolms.eu/files/86109/1200px-University_of_Nueva_Caceres_Seal(6).png?lmsauth=0d3e8d79854064302d3a29dc0243b9cba24f367f" />
            <Card.Body>
                <Card.Title>University of Nueva Caceres</Card.Title>
                <Card.Text>
                I started my grade 7 from the University of Nueva Caceres on May 27, 2016. This expeirence was a key step in my educational journey, paving the way for future opportunities and personal growth.
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbepjjhcjnvYQ7lpGFM2IXLHUNOoSTTENnVg&s" />
            <Card.Body>
                <Card.Title>Colegio del Santisimo Rosario</Card.Title>
                <Card.Text>
                I continued my grade 8 and grade 9 at CSR . I expeirence a lot at this school especially more knowledge and meet many friends .
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/451374804_995581475911370_4413265678678824405_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHvP9i0IgKBWaewPpwIaNdHihIM2UvWNZOKEgzZS9Y1kw2JtBvwy-b7pDdXBt8wpjJyQCWvLxhmETj8XplvStwU&_nc_ohc=gEnSL0TdXRcQ7kNvgFJriH0&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=AXbKaGRC7kVI7DJohHn5V5f&oh=00_AYA7ITcgZNAYN2lxzHmlT95gl9YtFUn22R-xkW9aVXi9sQ&oe=67575635" />
            <Card.Body>
                <Card.Title>Sipocot National Highschool</Card.Title>
                <Card.Text>
                I continued my grade 10 and graduated Senior Highschool . This expeirence was a key step in my educational journey, paving the way for future opportunities and personal growth. .
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://aims.ncf.edu.ph/assets/images/ncfi-logo.png" />
            <Card.Body>
                <Card.Title>Naga College Foundation Inc.</Card.Title>
                <Card.Text>
                I am currently pursuing a Bachelor of Science in Information System at Naga College Foundation Inc.. This program is equipping me with the skills and knowledge needed to excel in the field of technology and information management.
                </Card.Text>
                <Button variant="primary"></Button>
            </Card.Body>
            </Card>
            </Row>

        </>
    );
}

export default Educ;
