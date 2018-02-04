package gasolinaoualcool.cursoandroid.com.gasolinaoualcool;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private EditText precoA;
    private EditText precoG;
    private Button botaoVerificar;
    private TextView textoResultado;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Recuperar itens de tela
        precoA = (EditText) findViewById(R.id.precoalcoolid);
        precoG = (EditText) findViewById(R.id.precogasolinaid);
        botaoVerificar = (Button) findViewById(R.id.botaoverificarid);
        textoResultado =  (TextView) findViewById(R.id.textoresultadoid);

        //adicionar evento clique
        botaoVerificar.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {

                //RECUPERA VALORES DIGITADOS
                String textoA = precoA.getText().toString();
                String textoG = precoG.getText().toString();

                //Converter valores strings para numeros
                if ( textoA.isEmpty() && textoG.isEmpty()) {
                    textoResultado.setText("Nenhum valor inserido");

                }else if (textoA.isEmpty()){
                    textoResultado.setText("Digite o preço do alcool");

                }else if (textoG.isEmpty()) {
                    textoResultado.setText("Digite o preço da gasolina ");
                }else {

                    Double valorA = Double.parseDouble(textoA);
                    Double valorG = Double.parseDouble(textoG);

                    //alcool / gasolina

                    double resultado = valorA / valorG;

                    if (resultado >= 0.7) {
                        // Gasolina
                        textoResultado.setText("É melhor utilizar Gasolina");
                    } else {
                        //Alcool
                        textoResultado.setText("É melhor utilizar Alcool");
                    }
                }

            }

            });
                                          }

        }


